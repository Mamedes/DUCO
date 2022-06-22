import { IEventDataResponseDTO } from '@core/eventData/dtos/IEventDataResponseDTO';
import { Buyer } from '@entity/Buyer';
import { BuyerHotelExhibitor } from '@entity/BuyerHotelExhibitor';
import { HotelExhibitors } from '@entity/HotelExhibitor';

interface IBuyerHotelExhibitorRepository {
  create(
    hotelExhibitor: HotelExhibitors[],
    buyers: Buyer[],
    eventData: IEventDataResponseDTO
  ): Promise<void>;
  listAll(): Promise<BuyerHotelExhibitor[]>;
}

export { IBuyerHotelExhibitorRepository };
