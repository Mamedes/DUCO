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

  async create(buyer: ICreateBuyerDTO): Promise<void> {
    await appDataSource.transaction(async (transaction) => {
      const buyerRepository = this.repository.create({
        ...buyer,
      });
      transaction.save(buyerRepository);
    });
  }

  async createMany(buyers: ICreateBuyerDTO[]): Promise<Buyer[]> {
    return appDataSource.transaction(async (transaction) => {
      const buyersRepository = this.repository.create(buyers);
      return transaction.save(buyersRepository);
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
