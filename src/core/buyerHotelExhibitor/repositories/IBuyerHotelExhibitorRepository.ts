import { Buyer } from '@entity/Buyer';
import { BuyerHotelExhibitor } from '@entity/BuyerHotelExhibitor';

import { IBuyerHotelExhibitorResponseDTO } from '../dtos/IBuyerHotelExhibitorResponseDTO';

interface IBuyerHotelExhibitorRepository {
  create(
    hotelExhibitor: IBuyerHotelExhibitorResponseDTO[],
    buyers: Buyer[]
  ): Promise<void>;
  listAll(): Promise<BuyerHotelExhibitor[]>;
}

export { IBuyerHotelExhibitorRepository };
