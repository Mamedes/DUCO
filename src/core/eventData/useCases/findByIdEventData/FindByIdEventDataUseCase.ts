import { inject, injectable } from 'tsyringe';

import { IEventDataResponseDTO } from '@core/eventData/dtos/IEventDataResponseDTO';
import { EventDataMap } from '@core/eventData/mapper/EventDataMap';
import { IEventDataRepository } from '@core/eventData/repositories';
import { AppError } from '@infra/errors';

@injectable()
class FindByIdEventDataUseCase {
  constructor(
    @inject('EventDataRepository')
    private eventDataRepository: IEventDataRepository
  ) {}

  async execute(id: number): Promise<IEventDataResponseDTO> {
    const eventData = await this.eventDataRepository.findById(id);

    if (!eventData) {
      throw new AppError('event_data_not_found', 'NOT_FOUND');
    }
    return EventDataMap.toDTO(eventData);
  }
}

export { FindByIdEventDataUseCase };
