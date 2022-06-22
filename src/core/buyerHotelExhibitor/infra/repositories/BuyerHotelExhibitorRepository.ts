import { Repository } from 'typeorm';

import { ICreateBuyerHotelExhibitorDTO } from '@core/buyerHotelExhibitor/dtos';
import { IBuyerHotelExhibitorRepository } from '@core/buyerHotelExhibitor/repositories';
import { IEventDataResponseDTO } from '@core/eventData/dtos/IEventDataResponseDTO';
import { Buyer } from '@entity/Buyer';
import { BuyerHotelExhibitor } from '@entity/BuyerHotelExhibitor';
import { EventData } from '@entity/EventData';
import { HotelExhibitors } from '@entity/HotelExhibitor';
import { Schedule } from '@entity/Schedule';
import appDataSource from '@infra/database/AppDataSource';

class BuyerHotelExhibitorRepository implements IBuyerHotelExhibitorRepository {
  private repository: Repository<BuyerHotelExhibitor>;

  constructor() {
    this.repository = appDataSource.getRepository(BuyerHotelExhibitor);
  }

  async create(
    hotelExhibitor: HotelExhibitors[],
    buyers: Buyer[],
    eventData: IEventDataResponseDTO
  ): Promise<void> {
    const moveHotelDay = this.generateNumberMovement(eventData);

    const buyerHotelExhibitor: ICreateBuyerHotelExhibitorDTO[] = [];
    for (
      let countHotelExhibitor = 0;
      countHotelExhibitor < hotelExhibitor.length;
      countHotelExhibitor += 1
    ) {
      buyerHotelExhibitor.push({
        hotel_exhibitor_id: hotelExhibitor[countHotelExhibitor].id,
        buyer_id: buyers[countHotelExhibitor].id,
      });
    }
    appDataSource.transaction(async (transaction) => {
      const buyerHotelExhibitorRepository =
        this.repository.create(buyerHotelExhibitor);

      return transaction.save(buyerHotelExhibitorRepository);
    });
  }
  async listAll(): Promise<BuyerHotelExhibitor[]> {
    return this.repository.find();
  }
  private generateNumberMovement(eventData: IEventDataResponseDTO) {
    const maxEventDay = eventData.schedules.map(
      (schedule) => schedule.event_day
    );
    const maxNumberOfAppointments = Math.max(...maxEventDay);
    let numberCute = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const hotel of eventData.hotels) {
      if (hotel.totalTable <= maxNumberOfAppointments * 2) {
        if (hotel.totalTable > numberCute) {
          numberCute = hotel.totalTable;
        }
      }
    }

    return numberCute;
  }
}

export { BuyerHotelExhibitorRepository };
