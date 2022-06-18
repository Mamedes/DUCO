import { ICreateExhibitorDTO } from 'core/exhibitors/dtos';
import { inject, injectable } from 'tsyringe';

import { IExhibitorsRepository } from '@core/exhibitors/repositories';

@injectable()
class CreateManyExhibitorUseCase {
  constructor(
    @inject('ExhibitorsRepository')
    private exhibitorsRepository: IExhibitorsRepository
  ) {}

  async execute(exhibitors: ICreateExhibitorDTO[]): Promise<void> {
    await this.exhibitorsRepository.createMany(exhibitors);
  }
}

export { CreateManyExhibitorUseCase };
