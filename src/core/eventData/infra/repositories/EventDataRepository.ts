import { Repository } from 'typeorm';

import { ICreateEventDataDTO } from '@core/eventData/dtos';
import { IEventDataRepository } from '@core/eventData/repositories';
import { EventData } from '@entity/EventData';
import appDataSource from '@infra/database/AppDataSource';

class EventDataRepository implements IEventDataRepository {
  private repository: Repository<EventData>;

  constructor() {
    this.repository = appDataSource.getRepository(EventData);
  }

  async create(eventData: ICreateEventDataDTO): Promise<void> {
    await appDataSource.transaction(async (transaction) => {
      const eventDataRepository = this.repository.create({
        ...eventData,
      });
      transaction.save(eventDataRepository);
    });
  }
  async listAll(): Promise<EventData[]> {
    return this.repository.find();
  }
}

export { EventDataRepository };
