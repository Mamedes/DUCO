import { Repository } from 'typeorm';

import { ICreateExhibitorDTO } from '@core/exhibitors/dtos';
import { IExhibitorsRepository } from '@core/exhibitors/repositories';
import { Exhibitor } from '@entity/Exhibitor';
import appDataSource from '@infra/database/AppDataSource';

class ExhibitorsRepository implements IExhibitorsRepository {
  private repository: Repository<Exhibitor>;

  constructor() {
    this.repository = appDataSource.getRepository(Exhibitor);
  }

  async create(exhibitor: ICreateExhibitorDTO): Promise<void> {
    await appDataSource.transaction(async (transaction) => {
      const exhibitorRepository = this.repository.create({
        ...exhibitor,
      });
      transaction.save(exhibitorRepository);
    });
  }
  async createMany(exhibitors: ICreateExhibitorDTO[]): Promise<Exhibitor[]> {
    return appDataSource.transaction(async (transaction) => {
      const exhibitorRepository = this.repository.create(exhibitors);
      return transaction.save(exhibitorRepository);
    });
  }

  async listAll(): Promise<Exhibitor[]> {
    return this.repository.find();
  }
  async deleteAll(): Promise<void> {
    await this.repository.delete({});
  }
}

export { ExhibitorsRepository };
