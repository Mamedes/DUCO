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

import { EventData } from './EventData';

@Entity('hotels')
class Hotel {
  @PrimaryColumn({ generated: true })
  id: number;

  @Column()
  secure_id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ type: 'int', nullable: true })
  totalTables: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  eventDataId: string;

  @ManyToOne(() => EventData)
  @JoinColumn({ name: 'event_data_id' })
  eventData: EventData;

  constructor() {
    this.secure_id = crypto.randomBytes(10).toString('hex');
  }
}
export { Hotel };
