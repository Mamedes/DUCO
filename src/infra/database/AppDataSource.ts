import { DataSource } from 'typeorm';

import { Appointment } from '@entity/Appointment';
import { Buyer } from '@entity/Buyer';
import { EventData } from '@entity/EventData';
import { Exhibitor } from '@entity/Exhibitor';
import { Hotel } from '@entity/Hotel';
import { HotelExhibitors } from '@entity/HotelExhibitor';
import { Schedule } from '@entity/Schedule';

const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'duco',
  synchronize: true,
  logging: false,
  entities: [
    Appointment,
    Buyer,
    Exhibitor,
    Hotel,
    EventData,
    Schedule,
    HotelExhibitors,
  ],
  migrations: [],
  subscribers: [],
});

export const connect = () => {
  return appDataSource.initialize();
};

export default appDataSource;
