import crypto from 'crypto';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { HotelToEventData } from './HotelToEventData';

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

  @OneToMany(
    () => HotelToEventData,
    (hotelToEventData) => hotelToEventData.eventData
  )
  public hotelToEventData!: HotelToEventData[];

  constructor() {
    this.secure_id = crypto.randomBytes(10).toString('hex');
  }
}
export { EventData };
