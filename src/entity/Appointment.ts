import crypto from 'crypto';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Buyer } from './Buyer';
import { EventData } from './EventData';
import { Exhibitor } from './Exhibitor';
import { Hotel } from './Hotel';
import { Schedule } from './Schedule';

@Entity('appointments')
class Appointment {
  @PrimaryColumn({ generated: true })
  id: number;

  @Column()
  secure_id: string;

  @Column()
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  buyer_id: number;

  @ManyToOne(() => Buyer)
  @JoinColumn({ name: 'buyer_id' })
  buyer: Buyer;

  @Column()
  exhibitor_id: number;

  @ManyToOne(() => Exhibitor)
  @JoinColumn({ name: 'exhibitor_id' })
  exhibitor: Exhibitor;

  @Column()
  eventDataId: number;

  @ManyToOne(() => EventData, (eventData) => eventData.appointment, {
    onDelete: 'CASCADE',
  })
  public eventData!: EventData;

  @Column()
  hotel_id: number;

  @ManyToOne(() => Hotel)
  @JoinColumn({ name: 'hotel_id' })
  hotel: Hotel;

  @Column()
  schedule_id: number;

  @ManyToOne(() => Schedule)
  @JoinColumn({ name: 'schedule_id' })
  schedule: Schedule;

  constructor() {
    this.secure_id = crypto.randomBytes(10).toString('hex');
  }
}
export { Appointment };
