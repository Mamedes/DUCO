import { Repository } from 'typeorm';

import { ICreateEventDataDTO } from '@core/eventData/dtos';
import { IEventDataRepository } from '@core/eventData/repositories';
import { EventData } from '@entity/EventData';
import { Hotel } from '@entity/Hotel';
import { Schedule } from '@entity/Schedule';
import appDataSource from '@infra/database/AppDataSource';

class EventDataRepository implements IEventDataRepository {
  private repository: Repository<EventData>;
  private repositorySchedule: Repository<Schedule>;
  private repositoryHotel: Repository<Hotel>;

  constructor() {
    this.repository = appDataSource.getRepository(EventData);
    this.repositorySchedule = appDataSource.getRepository(Schedule);
    this.repositoryHotel = appDataSource.getRepository(Hotel);
  }

  async create(eventData: ICreateEventDataDTO): Promise<void> {
    const event_datas = await appDataSource.transaction(async (transaction) => {
      const eventDataRepository = this.repository.create({
        ...eventData,
      });
      console.log(eventDataRepository);
      return transaction.save(eventDataRepository);
    });
    await appDataSource.transaction(async (transaction) => {
      if (eventData.schedules) {
        await Promise.all(
          eventData.schedules.map((schedule) => {
            const scheduleRepository = this.repositorySchedule.create({
              eventDataId: event_datas.id,
              ...schedule,
            });
            return transaction.save(scheduleRepository);
          })
        );
      }
    });
    await appDataSource.transaction(async (transaction) => {
      if (eventData.hotels) {
        await Promise.all(
          eventData.hotels.map((hotel) => {
            const repositoryHotel = this.repositoryHotel.create({
              eventDataId: event_datas.id,
              ...hotel,
            });
            console.log(repositoryHotel);
            return transaction.save(repositoryHotel);
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
