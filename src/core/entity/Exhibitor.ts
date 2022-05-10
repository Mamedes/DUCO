import Appointment from "./Appointment";

export default class Exhibitor {
  id: number;
  name: string;
  email: string;
  idHotel: number;
  appointments: [Appointment] | [];
  constructor(
    id: number,
    name: string,
    email: string,
    idHotel: number,
    appointments: [Appointment] | []
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.idHotel = idHotel;
    this.appointments = appointments;
  }
}
