import { container } from 'tsyringe';

import { ICreateBuyerDTO } from '@core/buyers/dtos';
import { CreateManyBuyerUseCase } from '@core/buyers/useCases/createBuyer/CreateManyBuyerUseCase';

export default class AppointmentCreateListBuyer {
  async createBuyer(totalBuyers: number) {
    const createManyBuyerUseCase = container.resolve(CreateManyBuyerUseCase);
    const Buyers = [] as ICreateBuyerDTO[];

    for (let i = 1; i <= totalBuyers; i += 1) {
      const Buyer = {
        name: `Buyer ${i}`,
        email: `Buyer${i}@email.com`,
        phone: ` ${i}`,
      };
      Buyers.push(Buyer);
    }

    await createManyBuyerUseCase.execute(Buyers);
  }
}
