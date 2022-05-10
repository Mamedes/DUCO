import Appointment from "../entity/Appointment";
import Buyer from "../entity/Buyer";
import EventData from "../entity/EventData";
import Exhibitor from "../entity/Exhibitor";
import Hotel from "../entity/Hotel";
import AppointmentExist from "./AppointmentExist";
import GetTotalDay from "./GetTotalDay";
import LifoBuyer from "./LifoBuyer";
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
    let idBuyer = 0;
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
            listOfBuyers = this.changeListOfBuyersDay(listOfBuyers);
            dayModifier = day;
          }

          //PRECISO VERIFICAR QUANDO GERO OUTRO  time DE EVENTO PARA ANDAR O ID DO BUYER
          if (positionModifier !== i) {
            listOfBuyers = new LifoBuyer(
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
            // return { message: "Not possible generate list appointment" };
            console.log(
              appointment.id,
              appointment.idExhibitor,
              appointment.idBuyer
            );
            // return this.listOfAppointments;
          }

          this.listOfAppointments.push(appointment);
        }
      }
    }
    return this.listOfAppointments;
  }

  changeListOfBuyersDay(listOfBuyers): Array<Buyer> {
    let listOfBuyersModify = listOfBuyers;
    let buyerHotelA = listOfBuyers.slice(18, 41);
    let buyerHotelB = listOfBuyers.slice(70, 93);
    let buyerHotelC = listOfBuyers.slice(93, 116);

    listOfBuyersModify.splice(18, 23, ...buyerHotelC);
    listOfBuyersModify.splice(70, 23, ...buyerHotelA);
    listOfBuyersModify.splice(93, 23, ...buyerHotelB);

    return listOfBuyersModify;
  }
}
