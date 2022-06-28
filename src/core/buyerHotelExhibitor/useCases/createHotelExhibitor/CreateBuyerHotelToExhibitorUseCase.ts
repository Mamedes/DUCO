import { container, inject, injectable } from 'tsyringe';

import { IBuyerHotelExhibitorRepository } from '@core/buyerHotelExhibitor/repositories';
import { FindByIdEventDataUseCase } from '@core/eventData/useCases/findByIdEventData/FindByIdEventDataUseCase';
import { Buyer } from '@entity/Buyer';
import { BuyerHotelExhibitor } from '@entity/BuyerHotelExhibitor';
import { EventData } from '@entity/EventData';
import { HotelExhibitors } from '@entity/HotelExhibitor';

@injectable()
class CreateBuyerHotelExhibitorUseCase {
  constructor(
    @inject('BuyerHotelExhibitorRepository')
    private buyerHotelExhibitorRepository: IBuyerHotelExhibitorRepository
  ) {}

  async execute(
    hotelExhibitor: HotelExhibitors[],
    buyers: Buyer[],
    eventData: EventData
  ): Promise<BuyerHotelExhibitor[]> {
    const findByIdEventDataUseCase = container.resolve(
      FindByIdEventDataUseCase
    );
    const eventDataResponse = await findByIdEventDataUseCase.execute(
      eventData.id
    );
    return this.buyerHotelExhibitorRepository.create(
      hotelExhibitor,
      buyers,
      eventDataResponse
    );
  }
}

export { CreateBuyerHotelExhibitorUseCase };
