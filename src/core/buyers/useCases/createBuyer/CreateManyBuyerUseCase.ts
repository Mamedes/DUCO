import { inject, injectable } from 'tsyringe';

import { ICreateBuyerDTO } from '@core/buyers/dtos';
import { IBuyersRepository } from '@core/buyers/repositories';
import { Buyer } from '@entity/Buyer';
import { AppError } from '@infra/errors/AppError';

@injectable()
class CreateManyBuyerUseCase {
  constructor(
    @inject('BuyersRepository')
    private buyersRepository: IBuyersRepository
  ) {}

  async execute(buyers: ICreateBuyerDTO[]): Promise<Buyer[]> {
    if (buyers.length <= 0) {
      throw new AppError('not_possible_create_buyers', 'CONFLICT');
    }
    return this.buyersRepository.createMany(buyers);
  }
}

export { CreateManyBuyerUseCase };
