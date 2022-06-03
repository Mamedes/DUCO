import { ICreateExhibitorDTO } from 'core/exhibitors/dtos';
import { inject, injectable } from 'tsyringe';

import { IExhibitorsRepository } from '@core/exhibitors/repositories';
import { AppError } from '@infra/errors/AppError';

@injectable()
class CreateExhibitorUseCase {
  constructor(
    @inject('ExhibitorsRepository')
    private exhibitorsRepository: IExhibitorsRepository
  ) {}

  async execute(exhibitors: ICreateExhibitorDTO): Promise<void> {
    const exhibitorsAlreadyExists = await this.exhibitorsRepository.listAll();

    if (exhibitorsAlreadyExists) {
      throw new AppError('exhibitors_already_registered');
    }

    await this.exhibitorsRepository.create(exhibitors);
  }
}

export { CreateExhibitorUseCase };
