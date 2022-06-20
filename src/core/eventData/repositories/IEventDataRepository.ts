import { EventData } from '@entity/EventData';

import { ICreateEventDataDTO } from '../dtos';
import { IEventDataResponseDTO } from '../dtos/IEventDataResponseDTO';

interface IEventDataRepository {
  create(eventData: ICreateEventDataDTO): Promise<EventData>;
  listAll(): Promise<EventData[]>;
  findById(id: number): Promise<IEventDataResponseDTO | undefined>;
}

export { IEventDataRepository };
