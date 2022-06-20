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

import { Exhibitor } from './Exhibitor';
import { Hotel } from './Hotel';

@Entity('hotel_exhibitors')
class HotelExhibitors {
  @PrimaryColumn({ generated: true })
  id: number;

  @Column()
  secure_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  hotel_id: number;

  @ManyToOne(() => Hotel, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'hotel_id' })
  hotel: Hotel;

  @Column()
  exhibitor_id: number;

  @ManyToOne(() => Exhibitor, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'exhibitor_id' })
  exhibitor: Exhibitor;

  constructor() {
    this.secure_id = crypto.randomBytes(10).toString('hex');
  }
}
export { HotelExhibitors };
