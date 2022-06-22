import { container, inject, injectable } from 'tsyringe';

import { FindByIdEventDataUseCase } from '@core/eventData/useCases/findByIdEventData/FindByIdEventDataUseCase';
import { IHotelExhibitorRepository } from '@core/hotelExhibitor/repositories';
import { EventData } from '@entity/EventData';
import { Exhibitor } from '@entity/Exhibitor';
import { HotelExhibitors } from '@entity/HotelExhibitor';

@injectable()
class CreateHotelExhibitorUseCase {
  constructor(
    @inject('HotelExhibitorRepository')
    private hotelExhibitorRepository: IHotelExhibitorRepository
  ) {}

  async execute(
    eventData: EventData,
    exhibitors: Exhibitor[]
  ): Promise<HotelExhibitors[]> {
    const findByIdEventDataUseCase = container.resolve(
      FindByIdEventDataUseCase
    );
    const eventDataResponse = await findByIdEventDataUseCase.execute(
      eventData.id
    );

    return this.hotelExhibitorRepository.create(eventDataResponse, exhibitors);
  }
}

export { CreateHotelExhibitorUseCase };
