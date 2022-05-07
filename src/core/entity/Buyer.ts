import Appointment from "./Appointment";

export default class Buyer {
  id: number;
  name: string;
  email: string;
  appointments: [Appointment] | [];
  constructor(
    id: number,
    name: string,
    email: string,
    appointments: [Appointment] | []
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.appointments = appointments;
  }
}
