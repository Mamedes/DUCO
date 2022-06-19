import { inject, injectable } from 'tsyringe';

import { IBuyersRepository } from '@core/buyers/repositories';

@injectable()
class DeleteAllBuyerUseCase {
  constructor(
    @inject('BuyersRepository')
    private buyersRepository: IBuyersRepository
  ) {}

  async execute(): Promise<void> {
    await this.buyersRepository.deleteAll();
  }
}

export { DeleteAllBuyerUseCase };
