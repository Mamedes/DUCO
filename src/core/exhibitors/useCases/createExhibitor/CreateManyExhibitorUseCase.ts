import { ICreateExhibitorDTO } from 'core/exhibitors/dtos';
import { inject, injectable } from 'tsyringe';

import { IExhibitorsRepository } from '@core/exhibitors/repositories';
import { Exhibitor } from '@entity/Exhibitor';
import { AppError } from '@infra/errors';

@injectable()
class CreateManyExhibitorUseCase {
  constructor(
    @inject('ExhibitorsRepository')
    private exhibitorsRepository: IExhibitorsRepository
  ) {}

  async execute(exhibitors: ICreateExhibitorDTO[]): Promise<Exhibitor[]> {
    if (exhibitors.length <= 0) {
      throw new AppError('not_possible_create_exhibitors', 'CONFLICT');
    }
    return this.exhibitorsRepository.createMany(exhibitors);
  }
}

export { CreateManyExhibitorUseCase };
