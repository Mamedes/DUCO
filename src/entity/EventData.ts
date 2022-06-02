import crypto from 'crypto';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

import { Hotel } from './Hotel';

@Entity('event_datas')
class EventData {
  @PrimaryColumn({ generated: true })
  id: number;

  @Column()
  secure_id: string;

  @Column()
  name: string;

  @Column()
  date: Date;

  @Column()
  time: Date;

  @Column()
  duration: string;

  @Column()
  event_day: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
  @OneToMany(() => Hotel, (hotel) => hotel.eventData)
  hotel?: Hotel[];

  constructor() {
    this.secure_id = crypto.randomBytes(10).toString('hex');
  }
}
export { EventData };
