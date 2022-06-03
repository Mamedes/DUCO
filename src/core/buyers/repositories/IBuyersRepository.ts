import { Buyer } from '@entity/Buyer';

import { ICreateBuyerDTO } from '../dtos';

interface IBuyersRepository {
  create(user: ICreateBuyerDTO): Promise<void>;
  listAll(): Promise<Buyer[]>;
}

export { IBuyersRepository };
