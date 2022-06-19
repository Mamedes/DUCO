import crypto from 'crypto';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { EventData } from './EventData';

@Entity('schedules')
class Schedule {
  @PrimaryColumn({ generated: true })
  id: number;

  @Column()
  secure_id: string;

  @Column()
  date: Date;

  @Column({ type: 'time' })
  time_start: string;

  @Column({ type: 'time' })
  time_end: string;

  @Column()
  eventDataId: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => EventData, (eventData) => eventData.schedule, {
    onDelete: 'CASCADE',
  })
  public eventData!: EventData;

  constructor() {
    this.secure_id = crypto.randomBytes(10).toString('hex');
  }
}
export { Schedule };
