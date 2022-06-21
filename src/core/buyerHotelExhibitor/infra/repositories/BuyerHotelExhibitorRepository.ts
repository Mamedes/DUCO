import { Repository } from 'typeorm';

import { IBuyerHotelExhibitorResponseDTO } from '@core/buyerHotelExhibitor/dtos/IBuyerHotelExhibitorResponseDTO';
import { IBuyerHotelExhibitorRepository } from '@core/buyerHotelExhibitor/repositories';
import { Buyer } from '@entity/Buyer';
import { BuyerHotelExhibitor } from '@entity/BuyerHotelExhibitor';
import appDataSource from '@infra/database/AppDataSource';

class BuyerHotelExhibitorRepository implements IBuyerHotelExhibitorRepository {
  private repository: Repository<BuyerHotelExhibitor>;

  constructor() {
    this.repository = appDataSource.getRepository(BuyerHotelExhibitor);
  }

  async create(
    hotelExhibitor: IBuyerHotelExhibitorResponseDTO[],
    buyers: Buyer[]
  ): Promise<void> {
    for (
      let countHotelExhibitor = 0;
      countHotelExhibitor < hotelExhibitor.length;
      countHotelExhibitor += 1
    ) {
      appDataSource.transaction(async (transaction) => {
        const buyerHotelExhibitorRepository = this.repository.create({
          hotel_exhibitor_id: hotelExhibitor[countHotelExhibitor].id,
          buyer_id: buyers[countHotelExhibitor].id,
        });

        return transaction.save(buyerHotelExhibitorRepository);
      });
    }
  }
  async listAll(): Promise<BuyerHotelExhibitor[]> {
    return this.repository.find();
  }
}

export { BuyerHotelExhibitorRepository };
