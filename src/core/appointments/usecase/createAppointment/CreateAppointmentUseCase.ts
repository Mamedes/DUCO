import { inject, injectable } from 'tsyringe';

import { IAppointmentsRepository } from '@core/appointments/repositories';
import { IBuyerHotelExhibitorResponseDTO } from '@core/buyerHotelExhibitor/dtos/IBuyerHotelExhibitorResponseDTO';
import { IEventDataResponseDTO } from '@core/eventData/dtos/IEventDataResponseDTO';
import { Buyer } from '@entity/Buyer';
import { Exhibitor } from '@entity/Exhibitor';

@injectable()
class CreateAppointmentUseCase {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository
  ) {}

  async execute(
    buyer: Buyer[],
    exhibitor: Exhibitor[],
    eventData: IEventDataResponseDTO
  ): Promise<void> {
    await this.appointmentsRepository.create(buyer, exhibitor, eventData);
  }
}

export { CreateAppointmentUseCase };
