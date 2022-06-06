import { ICreateBuyerDTO } from 'core/buyers/dtos/ICreateBuyerDTO';
import { inject, injectable } from 'tsyringe';

import { IBuyersRepository } from '@core/buyers/repositories';
import { AppError } from '@infra/errors/AppError';

@injectable()
class CreateBuyerUseCase {
  constructor(
    @inject('BuyersRepository')
    private buyersRepository: IBuyersRepository
  ) {}

  async execute(user: ICreateBuyerDTO): Promise<void> {
    const buyersAlreadyExists = await this.buyersRepository.listAll();

    if (buyersAlreadyExists) {
      throw new AppError('buyers_already_registered');
    }

    await this.buyersRepository.create(user);
  }
}

export { CreateBuyerUseCase };
