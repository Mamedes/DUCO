import { container } from 'tsyringe';

import { AppointmentsRepository } from '@core/appointments/infra/repositories/AppointmentsRepository';
import { IAppointmentsRepository } from '@core/appointments/repositories';
import { BuyersRepository } from '@core/buyers/infra/repositories/BuyersRepository';
import { IBuyersRepository } from '@core/buyers/repositories/IBuyersRepository';
import { EventDataRepository } from '@core/eventData/infra/repositories';
import { IEventDataRepository } from '@core/eventData/repositories';
import { ExhibitorsRepository } from '@core/exhibitors/infra/repositories';
import { IExhibitorsRepository } from '@core/exhibitors/repositories';
import { HotelRepository } from '@core/hotel/infra/repositories';
import { IHotelRepository } from '@core/hotel/repositories';
import { HotelExhibitorRepository } from '@core/hotelExhibitor/infra/repositories/HotelExhibitorRepository';
import { IHotelExhibitorRepository } from '@core/hotelExhibitor/repositories';

container.registerSingleton<IBuyersRepository>(
  'BuyersRepository',
  BuyersRepository
);

container.registerSingleton<IExhibitorsRepository>(
  'ExhibitorsRepository',
  ExhibitorsRepository
);

container.registerSingleton<IEventDataRepository>(
  'EventDataRepository',
  EventDataRepository
);

container.registerSingleton<IHotelRepository>(
  'HotelRepository',
  HotelRepository
);

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository
);

container.registerSingleton<IHotelExhibitorRepository>(
  'HotelExhibitorRepository',
  HotelExhibitorRepository
);
