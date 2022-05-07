import Appointment from "../entity/Appointment";
import Buyer from "../entity/Buyer";
import Exhibitor from "../entity/Exhibitor";

type Hotel = {
  id: number;
  name: string;
  email: string;
  table: number;
};
export default class GetAppointment {
  private TOTAL_BUYERS: number;
  private TOTAL_EXHIBITOR: number;
  private TOTAL_DAYS: number;
  private TOTAL_HOTEL: number;
  private TOTAL_EVENT_DAY: number;
  private hotels: Array<Hotel>;
  private listOfAppointments: Array<Appointment> = [];
  private listOfBuyers: Array<Buyer> = [];
  private listOfExhibitors: Array<Exhibitor> = [];

  constructor(
    hotels: Array<Hotel>,
    TOTAL_HOTEL: number,
    listOfBuyers: Array<Buyer>,
    listOfExhibitors: Array<Exhibitor>,
    TOTAL_EVENT_DAY: number,
    TOTAL_DAYS: number
  ) {
    this.hotels = hotels;
    this.TOTAL_HOTEL = TOTAL_HOTEL;
    this.TOTAL_DAYS = TOTAL_DAYS;
    this.TOTAL_EVENT_DAY = TOTAL_EVENT_DAY;
    this.listOfExhibitors = listOfExhibitors;
    this.listOfBuyers = listOfBuyers;
  }

  async execute() {
    const TOTAL_EXHIBITOR = this.listOfExhibitors.length;
    const TOTAL_BUYERS = this.listOfBuyers.length;

    let numberOfAppointments = 0;

    const event_day = [19, 19, 17];

    let idAppointment = 0;
    let idBuyer = 0;
    let appointment: Appointment;
    let positionModifier = 1;

    for (let day = 1; day <= this.TOTAL_DAYS; day++) {
      for (let i = 1; i <= event_day[day]; i++) {
        for (
          let idExhibitor = 1;
          idExhibitor <= TOTAL_EXHIBITOR;
          idExhibitor++
        ) {
          numberOfAppointments = numberOfAppointments + 1;
          idAppointment = idAppointment + 1;

          // if (idBuyer > 116) {
          //   idBuyer = 1;
          // }

          //PRECISO VERIFICAR QUANDO GERO OUTRO  PERIODO DE EVENTO PARA ANDAR O ID DO BUYER

          let consonate = this.alterIdBuyer(
            idExhibitor,
            i,
            positionModifier,
            idBuyer
          );

          let idHotel = this.changeIdHotel(idExhibitor);

          appointment = {
            id: idAppointment,
            idExhibitor: idExhibitor,
            idBuyer: consonate === undefined ? idExhibitor : consonate,

            day: day,
            appointmentNumber: numberOfAppointments,
            idHotel: idHotel,
          };
          // if (
          //   this.appointmentsExist(
          //     appointment.idExhibitor,
          //     appointment.idBuyer,
          //     appointment
          //   )
          // ) {
          //   return this.listOfAppointments;
          // }

          this.listOfAppointments.push(appointment);
        }
      }
    }
    return this.listOfAppointments;
  }

  appointmentsExist(idExhibitor, idBuyer, _appointment) {
    for (let i = 0; i < this.listOfAppointments.length; i++) {
      if (
        this.listOfAppointments[i].idExhibitor === idExhibitor &&
        this.listOfAppointments[i].idBuyer === idBuyer
      ) {
        return true;
      }
    }
    return false;
  }

  changeIdHotel(idExhibitor) {
    let idHotel = 0;

    if (idExhibitor <= 41) {
      idHotel = 1;
    }
    if (idExhibitor > 41 && idExhibitor <= 93) {
      idHotel = 2;
    }
    if (idExhibitor > 93 && idExhibitor <= 116) {
      idHotel = 3;
    }
    return idHotel;
  }

  alterIdBuyer(idExhibitor, i, positionModifier, idBuyer) {
    if (positionModifier !== i) {
      if (idExhibitor === 1) {
        return 43 - i;
      }

      if (idExhibitor > 2 && idExhibitor < 41) {
        return (idBuyer = idExhibitor - i);
      }

      if (idExhibitor === 42) {
        return 95 - i;
      }

      if (idExhibitor > 43 && idExhibitor < 93) {
        return (idBuyer = idExhibitor - i);
      }

      if (idExhibitor === 94) {
        console.log("94", i, idBuyer, idExhibitor);
        return 118 - i;
      }

      if (idExhibitor > 94 && idExhibitor < 116) {
        return (idBuyer = idExhibitor - i);
      }

      positionModifier++;
    }
  }
}
