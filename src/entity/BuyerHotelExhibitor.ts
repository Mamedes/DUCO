import crypto from 'crypto';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Buyer } from './Buyer';
import { HotelExhibitors } from './HotelExhibitor';

@Entity('buyer_hotel_exhibitors')
class BuyerHotelExhibitor {
  @PrimaryColumn({ generated: true })
  id: number;

  @Column()
  secure_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({})
  date: Date;

  @Column()
  buyer_id: number;

  @ManyToOne(() => Buyer, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'buyer_id' })
  buyer: Buyer;

  @Column()
  hotel_exhibitor_id: number;

  @ManyToOne(() => HotelExhibitors, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'hotel_exhibitor_id' })
  hotelExhibitor: HotelExhibitors;

  constructor() {
    this.secure_id = crypto.randomBytes(10).toString('hex');
  }
}
export { BuyerHotelExhibitor };
