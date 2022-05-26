import Appointment from "../entity/Appointment";
import Buyer from "../entity/Buyer";
import EventData from "../entity/EventData";
import Exhibitor from "../entity/Exhibitor";
import Hotel from "../entity/Hotel";
import AppointmentExist from "./AppointmentExist";
import GetTotalDay from "./GetTotalDay";
import MoveBuyerInHotel from "./MoveBuyerInHotel";
import MoveBuyerOfDay from "./MoveBuyerOfDay";
import ListOfEventDataOfDay from "./ListOfEventDataOfDay";

export default class GenerateAppointment {
  private listOfEventData: Array<EventData> = [];
  private listOfHotels: Array<Hotel> = [];
  private listOfAppointments: Array<Appointment> = [];
  private listOfBuyers: Array<Buyer> = [];
  private listOfExhibitors: Array<Exhibitor> = [];

  constructor(
    listOfBuyers: Array<Buyer>,
    listOfExhibitors: Array<Exhibitor>,
    listOfEventData: Array<EventData>,
    listOfHotels: Array<Hotel>
  ) {
    this.listOfEventData = listOfEventData;
    this.listOfHotels = listOfHotels;
    this.listOfExhibitors = listOfExhibitors;
    this.listOfBuyers = listOfBuyers;
  }

  async execute() {
    const TOTAL_EXHIBITOR = this.listOfExhibitors.length;
    const totalDay = new GetTotalDay(this.listOfEventData).execute();
    const event_day = new ListOfEventDataOfDay(this.listOfEventData).execute();

    let listOfBuyers = this.listOfBuyers;
    let numberOfAppointments = 0;
    let idAppointment = 0;
    let appointment: Appointment;
    let positionModifier = 1;
    let dayModifier = 0;

    for (let day = 0; day <= totalDay; day++) {
      for (let i = 1; i <= event_day[day]; i++) {
        for (
          let idExhibitor = 1;
          idExhibitor <= TOTAL_EXHIBITOR;
          idExhibitor++
        ) {
          numberOfAppointments = numberOfAppointments + 1;
          idAppointment = idAppointment + 1;

          if (dayModifier !== day) {
            listOfBuyers = new MoveBuyerOfDay(
              listOfBuyers,
              this.listOfHotels
            ).execute();
            dayModifier = day;
          }

          if (positionModifier !== i) {
            listOfBuyers = new MoveBuyerInHotel(
              listOfBuyers,
              this.listOfHotels
            ).execute();

            positionModifier = i;
          }

          appointment = {
            id: idAppointment,
            idExhibitor: idExhibitor,
            idBuyer: listOfBuyers[idExhibitor - 1].id,

            day: day,
            appointmentNumber: numberOfAppointments,
          };

          const appointmentExist = new AppointmentExist(
            this.listOfAppointments,
            idExhibitor,
            listOfBuyers[idExhibitor - 1].id
          ).execute();

          if (appointmentExist) {
            return { Error: "Not possible Appointments generated" };
          }

          this.listOfAppointments.push(appointment);
        }
      }
    }
    return { Success: "Appointments generated" };
  }
}
