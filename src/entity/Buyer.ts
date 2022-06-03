import crypto from 'crypto';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

import { Appointment } from './Appointment';

@Entity('buyers')
class Buyer {
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Appointment, (appointment) => appointment.buyer)
  appointment?: Appointment[];

  constructor() {
    this.secure_id = crypto.randomBytes(10).toString('hex');
  }
}
export { Buyer };
