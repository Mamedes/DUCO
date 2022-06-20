import { ICreateAppointmentDTO } from '../dtos';

interface IAppointmentsRepository {
  create(appointment: ICreateAppointmentDTO): Promise<void>;
}

export { IAppointmentsRepository };
