import { container } from 'tsyringe';

import { BuyersRepository } from '@core/buyers/infra/repositories/BuyersRepository';
import { IBuyersRepository } from '@core/buyers/repositories/IBuyersRepository';

container.registerSingleton<IBuyersRepository>(
  'BuyersRepository',
  BuyersRepository
);
