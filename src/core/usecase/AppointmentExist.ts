import Appointment from "../entity/Appointment";

export default class AppointmentExist {
  private listOfAppointments: Array<Appointment>;
  private idExhibitor: number;
  private idBuyer: number;
  constructor(
    listOfAppointments: Array<Appointment>,
    idExhibitor: number,
    idBuyer: number
  ) {
    this.listOfAppointments = listOfAppointments;
    this.idExhibitor = idExhibitor;
    this.idBuyer = idBuyer;
  }
  execute(): boolean {
    for (const appointment of this.listOfAppointments) {
      if (
        appointment.idExhibitor === this.idExhibitor &&
        appointment.idBuyer === this.idBuyer
      ) {
        return true;
      }
    }
    return false;
  }
}
