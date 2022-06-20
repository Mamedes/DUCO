import { inject, injectable } from 'tsyringe';

import { ICreateAppointmentDTO } from '@core/appointments/dtos';
import { IAppointmentsRepository } from '@core/appointments/repositories';

@injectable()
class CreateAppointmentUseCase {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository
  ) {}

  async execute(appointments: ICreateAppointmentDTO): Promise<void> {
    await this.appointmentsRepository.create(appointments);
  }
}

export { CreateAppointmentUseCase };
