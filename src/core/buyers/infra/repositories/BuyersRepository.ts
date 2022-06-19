import { IBuyersRepository } from 'core/buyers/repositories/IBuyersRepository';
import { Repository } from 'typeorm';

import { ICreateBuyerDTO } from '@core/buyers/dtos/ICreateBuyerDTO';
import { Buyer } from '@entity/Buyer';
import appDataSource from '@infra/database/AppDataSource';

class BuyersRepository implements IBuyersRepository {
  private repository: Repository<Buyer>;

  constructor() {
    this.repository = appDataSource.getRepository(Buyer);
  }

  async create(user: ICreateBuyerDTO): Promise<void> {
    await appDataSource.transaction(async (transaction) => {
      const userRepository = this.repository.create({
        ...user,
      });
      transaction.save(userRepository);
    });
  }

  async createMany(buyers: ICreateBuyerDTO[]): Promise<void> {
    await appDataSource.transaction(async (transaction) => {
      const buyersRepository = this.repository.create(buyers);
      transaction.save(buyersRepository);
    });
  }

  async deleteAll(): Promise<void> {
    await this.repository.delete({});
  }
  async listAll(): Promise<Buyer[]> {
    return this.repository.find();
  }
}

export { BuyersRepository };
