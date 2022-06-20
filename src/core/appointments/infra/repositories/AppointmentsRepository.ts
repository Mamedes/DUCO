import { Repository } from 'typeorm';

import { ICreateAppointmentDTO } from '@core/appointments/dtos';
import { IAppointmentsRepository } from '@core/appointments/repositories';
import { Appointment } from '@entity/Appointment';
import appDataSource from '@infra/database/AppDataSource';

class AppointmentsRepository implements IAppointmentsRepository {
  private repository: Repository<Appointment>;

  constructor() {
    this.repository = appDataSource.getRepository(Appointment);
  }

  async create(appointments: ICreateAppointmentDTO): Promise<void> {
    await appDataSource.transaction(async (transaction) => {
      const appointmentRepository = this.repository.create({
        ...appointments,
      });
      transaction.save(appointmentRepository);
    });
  }
}

export { AppointmentsRepository };
