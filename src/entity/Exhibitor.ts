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

@Entity('exhibitors')
class Exhibitor {
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
  tableNumber: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Appointment, (appointment) => appointment.exhibitor)
  appointment?: Appointment[];

  constructor() {
    this.secure_id = crypto.randomBytes(10).toString('hex');
  }
}
export { Exhibitor };
