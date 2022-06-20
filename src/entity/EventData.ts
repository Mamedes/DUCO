import crypto from 'crypto';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Appointment } from './Appointment';
import { Hotel } from './Hotel';
import { Schedule } from './Schedule';

@Entity('event_datas')
class EventData {
  @PrimaryColumn({ generated: true })
  id: number;

  @Column()
  secure_id: string;

  @Column()
  name: string;

  @Column()
  days: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Schedule, (schedule) => schedule.eventData)
  public schedule!: Schedule[];

  @OneToMany(() => Hotel, (hotel) => hotel.eventData)
  public hotel!: Hotel[];

  @OneToMany(() => Hotel, (appointment) => appointment.eventData)
  public appointment!: Appointment[];

  constructor() {
    this.secure_id = crypto.randomBytes(10).toString('hex');
  }
}
export { EventData };
