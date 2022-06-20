import { Repository } from 'typeorm';

import { IEventDataResponseDTO } from '@core/eventData/dtos/IEventDataResponseDTO';
import { IHotelExhibitorRepository } from '@core/hotelExhibitor/repositories/IHotelExhibitorRepository';
import { Exhibitor } from '@entity/Exhibitor';
import { HotelExhibitors } from '@entity/HotelExhibitor';
import appDataSource from '@infra/database/AppDataSource';

class HotelExhibitorRepository implements IHotelExhibitorRepository {
  private repository: Repository<HotelExhibitors>;

  constructor() {
    this.repository = appDataSource.getRepository(HotelExhibitors);
  }

  async create(
    eventData: IEventDataResponseDTO,
    exhibitors: Exhibitor[]
  ): Promise<void> {
    let countExhibitor = 0;
    for (
      let countHotel = 0;
      countHotel < eventData.hotels.length;
      countHotel += 1
    ) {
      for (
        let countPositionHotel = 0;
        countPositionHotel < eventData.hotels[countHotel].totalTable;
        countPositionHotel += 1
      ) {
        // eslint-disable-next-line no-loop-func
        appDataSource.transaction(async (transaction) => {
          const hotelExhibitorRepository = this.repository.create({
            hotel_id: eventData.hotels[countHotel].id,
            exhibitor_id: exhibitors[countExhibitor].id,
          });
          countExhibitor += 1;
          return transaction.save(hotelExhibitorRepository);
        });
      }
    }
  }
  async listAll(): Promise<HotelExhibitors[]> {
    return this.repository.find();
  }
}

export { HotelExhibitorRepository };
