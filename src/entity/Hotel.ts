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

  @Column({ type: 'int' })
  totalTable: number;

  @Column()
  eventDataId: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => EventData, (eventData) => eventData.hotel, {
    onDelete: 'CASCADE',
  })
  public eventData!: EventData;

  constructor() {
    this.secure_id = crypto.randomBytes(10).toString('hex');
  }
}
export { Hotel };
