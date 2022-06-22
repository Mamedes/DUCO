import { IEventDataResponseDTO } from '@core/eventData/dtos/IEventDataResponseDTO';
import { Exhibitor } from '@entity/Exhibitor';
import { HotelExhibitors } from '@entity/HotelExhibitor';

interface IHotelExhibitorRepository {
  create(
    eventData: IEventDataResponseDTO,
    exhibitors: Exhibitor[]
  ): Promise<HotelExhibitors[]>;
  listAll(): Promise<HotelExhibitors[]>;
}

export { IHotelExhibitorRepository };
