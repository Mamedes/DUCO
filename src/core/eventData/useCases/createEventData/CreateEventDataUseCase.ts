import { inject, injectable } from 'tsyringe';

import { ICreateEventDataDTO } from '@core/eventData/dtos';
import { IEventDataRepository } from '@core/eventData/repositories';

@injectable()
class CreateEventDataUseCase {
  constructor(
    @inject('EventDataRepository')
    private eventDataRepository: IEventDataRepository
  ) {}

  async execute(eventData: ICreateEventDataDTO): Promise<void> {
    await this.eventDataRepository.create(eventData);
  }
}

export { CreateEventDataUseCase };
