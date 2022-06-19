import { Repository } from 'typeorm';

import { ICreateEventDataDTO } from '@core/eventData/dtos';
import { IEventDataRepository } from '@core/eventData/repositories';
import { EventData } from '@entity/EventData';
import { Schedule } from '@entity/Schedule';
import appDataSource from '@infra/database/AppDataSource';

class EventDataRepository implements IEventDataRepository {
  private repository: Repository<EventData>;
  private repositorySchedule: Repository<Schedule>;

  constructor() {
    this.repository = appDataSource.getRepository(EventData);
    this.repositorySchedule = appDataSource.getRepository(Schedule);
  }

  async create(eventData: ICreateEventDataDTO): Promise<void> {
    const event_datas = await appDataSource.transaction(async (transaction) => {
      const eventDataRepository = this.repository.create({
        ...eventData,
      });
      return transaction.save(eventDataRepository);
    });
    await appDataSource.transaction(async (transaction) => {
      if (eventData.schedule) {
        await Promise.all(
          eventData.schedule.map((schedule) => {
            const scheduleRepository = this.repositorySchedule.create({
              eventDataId: event_datas.id,
              ...schedule,
            });
            return transaction.save(scheduleRepository);
          })
        );
      }
    });
  }
  async listAll(): Promise<EventData[]> {
    return this.repository.find();
  }
}

export { EventDataRepository };
