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

  @OneToMany(
    () => HotelToEventData,
    (hotelToEventData) => hotelToEventData.hotel
  )
  public hotelToEventData!: HotelToEventData[];

  constructor() {
    this.secure_id = crypto.randomBytes(10).toString('hex');
  }
}
export { Hotel };
