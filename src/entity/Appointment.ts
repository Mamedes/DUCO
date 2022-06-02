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
import { Exhibitor } from './Exhibitor';

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
  buyer_id: string;

  @ManyToOne(() => Buyer)
  @JoinColumn({ name: 'buyer_id' })
  buyer: Buyer;

  @Column()
  exhibitor_id: string;

  @ManyToOne(() => Exhibitor)
  @JoinColumn({ name: 'exhibitor_id' })
  exhibitor: Exhibitor;
  constructor() {
    this.secure_id = crypto.randomBytes(10).toString('hex');
  }
}
export { Appointment };
