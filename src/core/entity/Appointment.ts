export default class Appointment {
  public id: number;
  public idBuyer: number;
  public idExhibitor: number;
  public day: number;
  public appointmentNumber: number;
  public idHotel: number;

  constructor(
    id: number,
    idBuyer: number,
    idExhibitor: number,
    day: number,
    appointmentNumber: number,
    idHotel: number
  ) {
    this.id = id;
    this.idBuyer = idBuyer;
    this.idExhibitor = idExhibitor;
    this.day = day;
    this.appointmentNumber = appointmentNumber;
    this.idHotel = idHotel;
  }
}
