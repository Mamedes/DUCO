import { Buyer } from '@entity/Buyer';

import { ICreateBuyerDTO } from '../dtos';

interface IBuyersRepository {
  create(buyer: ICreateBuyerDTO): Promise<void>;
  createMany(buyers: ICreateBuyerDTO[]): Promise<void>;
  listAll(): Promise<Buyer[]>;
  deleteAll(): Promise<void>;
}

export { IBuyersRepository };
