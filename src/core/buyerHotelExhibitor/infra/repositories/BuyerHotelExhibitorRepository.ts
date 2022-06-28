import { Repository } from 'typeorm';

import { ICreateBuyerHotelExhibitorDTO } from '@core/buyerHotelExhibitor/dtos';
import { IBuyerHotelExhibitorRepository } from '@core/buyerHotelExhibitor/repositories';
import { IEventDataResponseDTO } from '@core/eventData/dtos/IEventDataResponseDTO';
import { Buyer } from '@entity/Buyer';
import { BuyerHotelExhibitor } from '@entity/BuyerHotelExhibitor';
import { HotelExhibitors } from '@entity/HotelExhibitor';
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
  ): Promise<BuyerHotelExhibitor[]> {
    const moveHotelDay = 26;
    const moveHotelDay2 = 26 * 2;
    const tableValue = eventData.hotels.map((hotel) => hotel.totalTable);
    let somaTable = 0;
    for (
      let countTableHotel = 0;
      countTableHotel < tableValue.length;
      countTableHotel += 1
    ) {
      somaTable += tableValue[countTableHotel];
    }

    const totalDay = eventData.schedules.length;

    const buyerHotelExhibitor: ICreateBuyerHotelExhibitorDTO[] = [];
    for (let countDay = 0; countDay < totalDay; countDay += 1) {
      for (
        let countHotelExhibitor = 0;
        countHotelExhibitor < hotelExhibitor.length;
        countHotelExhibitor += 1
      ) {
        if (countDay === 1) {
          if (countHotelExhibitor + moveHotelDay >= 116) {
            const position = somaTable - countHotelExhibitor;
            buyerHotelExhibitor.push({
              day: countDay,
              hotel_exhibitor_id: position === 0 ? 1 : position,
              buyer_id: countHotelExhibitor + 1,
            });
          } else {
            buyerHotelExhibitor.push({
              day: countDay,
              hotel_exhibitor_id: countHotelExhibitor + moveHotelDay + 1,
              buyer_id: countHotelExhibitor + 1,
            });
          }
        }
        if (countDay === 2) {
          if (countHotelExhibitor + moveHotelDay2 >= 116) {
            const position = somaTable - countHotelExhibitor;

            buyerHotelExhibitor.push({
              day: countDay,
              hotel_exhibitor_id: position === 0 ? 1 : position,
              buyer_id: countHotelExhibitor + 1,
            });
          } else {
            buyerHotelExhibitor.push({
              day: countDay,
              hotel_exhibitor_id: countHotelExhibitor + 1,
              buyer_id: countHotelExhibitor + 1,
            });
          }
        }
        if (countDay <= 0) {
          buyerHotelExhibitor.push({
            day: countDay,
            hotel_exhibitor_id: hotelExhibitor[countHotelExhibitor].id,
            buyer_id: buyers[countHotelExhibitor].id,
          });
        }
      }
    }
    return appDataSource.transaction(async (transaction) => {
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
