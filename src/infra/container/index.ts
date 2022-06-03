import { container } from 'tsyringe';

import { BuyersRepository } from '@core/buyers/infra/repositories/BuyersRepository';
import { IBuyersRepository } from '@core/buyers/repositories/IBuyersRepository';
import { ExhibitorsRepository } from '@core/exhibitors/infra/repositories';
import { IExhibitorsRepository } from '@core/exhibitors/repositories';

container.registerSingleton<IBuyersRepository>(
  'BuyersRepository',
  BuyersRepository
);

container.registerSingleton<IExhibitorsRepository>(
  'ExhibitorsRepository',
  ExhibitorsRepository
);
