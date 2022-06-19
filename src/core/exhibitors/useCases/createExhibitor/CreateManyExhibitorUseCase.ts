import { ICreateExhibitorDTO } from 'core/exhibitors/dtos';
import { inject, injectable } from 'tsyringe';

import { IExhibitorsRepository } from '@core/exhibitors/repositories';
import { AppError } from '@infra/errors';

@injectable()
class CreateManyExhibitorUseCase {
  constructor(
    @inject('ExhibitorsRepository')
    private exhibitorsRepository: IExhibitorsRepository
  ) {}

  async execute(exhibitors: ICreateExhibitorDTO[]): Promise<void> {
    if (exhibitors.length <= 0) {
      throw new AppError('not_possible_create_exhibitors', 'CONFLICT');
    }
    await this.exhibitorsRepository.createMany(exhibitors);
  }
}

export { CreateManyExhibitorUseCase };
