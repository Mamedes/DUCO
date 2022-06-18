import { inject, injectable } from 'tsyringe';

import { IExhibitorsRepository } from '@core/exhibitors/repositories';

@injectable()
class DeleteAllExhibitorUseCase {
  constructor(
    @inject('ExhibitorsRepository')
    private exhibitorsRepository: IExhibitorsRepository
  ) {}

  async execute(): Promise<void> {
    await this.exhibitorsRepository.deleteAll();
  }
}

export { DeleteAllExhibitorUseCase };
