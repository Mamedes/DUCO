import { Repository } from 'typeorm';

import { ICreateHotelDTO } from '@core/hotel/dtos';
import { IHotelRepository } from '@core/hotel/repositories';
import { Hotel } from '@entity/Hotel';
import appDataSource from '@infra/database/AppDataSource';

class HotelRepository implements IHotelRepository {
  private repository: Repository<Hotel>;

  constructor() {
    this.repository = appDataSource.getRepository(Hotel);
  }

  async create(hotel: ICreateHotelDTO): Promise<void> {
    await appDataSource.transaction(async (transaction) => {
      const hotelRepository = this.repository.create({
        ...hotel,
      });
      transaction.save(hotelRepository);
    });
  }
  async listAll(): Promise<Hotel[]> {
    return this.repository.find();
  }
}

export { HotelRepository };
