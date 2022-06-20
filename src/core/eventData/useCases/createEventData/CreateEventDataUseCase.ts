import { inject, injectable } from 'tsyringe';

import { ICreateEventDataDTO } from '@core/eventData/dtos';
import { IEventDataRepository } from '@core/eventData/repositories';
import { EventData } from '@entity/EventData';

@injectable()
class CreateEventDataUseCase {
  constructor(
    @inject('EventDataRepository')
    private eventDataRepository: IEventDataRepository
  ) {}

  async execute(eventData: ICreateEventDataDTO): Promise<EventData> {
    return this.eventDataRepository.create(eventData);
  }
}

export { CreateEventDataUseCase };
