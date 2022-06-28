import { IEventDataResponseDTO } from '@core/eventData/dtos/IEventDataResponseDTO';
import { Buyer } from '@entity/Buyer';
import { Exhibitor } from '@entity/Exhibitor';

interface IAppointmentsRepository {
  create(
    buyer: Buyer[],
    exhibitor: Exhibitor[],
    eventData: IEventDataResponseDTO
  ): Promise<void>;
}

export { IAppointmentsRepository };
