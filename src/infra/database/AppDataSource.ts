import { DataSource } from 'typeorm';

import { Appointment } from '@entity/Appointment';
import { Buyer } from '@entity/Buyer';
import { EventData } from '@entity/EventData';
import { Exhibitor } from '@entity/Exhibitor';
import { Hotel } from '@entity/Hotel';

// import { Buyer } from '@core/entity/Buyer';
// import { Exhibitor } from '@core/entity/Exhibitor';
// import { Hotel } from '@core/entity/Hotel';

const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'duco',
  synchronize: true,
  logging: false,
  entities: [Appointment, Buyer, Exhibitor, Hotel, EventData],
  migrations: [],
  subscribers: [],
});

export const connect = () => {
  return appDataSource.initialize();
};

export default appDataSource;
