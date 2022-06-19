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
import { Schedule } from './Schedule';

@Entity('event_datas')
class EventData {
  @PrimaryColumn({ generated: true })
  id: number;

  @Column()
  name: string;

  @Column()
  days: number;

  @Column()
  event_day: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    () => HotelToEventData,
    (hotelToEventData) => hotelToEventData.eventData
  )
  public hotelToEventData!: HotelToEventData[];

  @OneToMany(() => Schedule, (schedule) => schedule.eventData)
  public schedule!: Schedule[];
}
export { EventData };
