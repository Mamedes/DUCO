import { inject, injectable } from 'tsyringe';

import { IBuyerHotelExhibitorResponseDTO } from '@core/buyerHotelExhibitor/dtos/IBuyerHotelExhibitorResponseDTO';
import { IBuyerHotelExhibitorRepository } from '@core/buyerHotelExhibitor/repositories';
import { Buyer } from '@entity/Buyer';

@injectable()
class CreateBuyerHotelExhibitorUseCase {
  constructor(
    @inject('BuyerHotelExhibitorRepository')
    private buyerHotelExhibitorRepository: IBuyerHotelExhibitorRepository
  ) {}

  async execute(
    hotelExhibitor: IBuyerHotelExhibitorResponseDTO[],
    buyers: Buyer[]
  ): Promise<void> {
    this.buyerHotelExhibitorRepository.create(hotelExhibitor, buyers);
  }
}

export { CreateBuyerHotelExhibitorUseCase };
