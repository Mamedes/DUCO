import { inject, injectable } from 'tsyringe';

import { ICreateHotelDTO } from '@core/hotel/dtos';
import { IHotelRepository } from '@core/hotel/repositories';

@injectable()
class CreateHotelUseCase {
  constructor(
    @inject('HotelRepository')
    private hotelRepository: IHotelRepository
  ) {}

  async execute(hotel: ICreateHotelDTO): Promise<void> {
    await this.hotelRepository.create(hotel);
  }
}

export { CreateHotelUseCase };
