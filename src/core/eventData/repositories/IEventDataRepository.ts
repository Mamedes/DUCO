import { EventData } from '@entity/EventData';

import { ICreateEventDataDTO } from '../dtos';

interface IEventDataRepository {
  create(eventData: ICreateEventDataDTO): Promise<void>;
  listAll(): Promise<EventData[]>;
}

export { IEventDataRepository };
