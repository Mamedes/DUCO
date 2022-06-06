import { Hotel } from '@entity/Hotel';

import { ICreateHotelDTO } from '../dtos';

interface IHotelRepository {
  create(hotel: ICreateHotelDTO): Promise<void>;
  listAll(): Promise<Hotel[]>;
}

export { IHotelRepository };
