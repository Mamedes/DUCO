import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { EventData } from './EventData';
import { Hotel } from './Hotel';

@Entity('hotel_events')
class HotelToEventData {
  @PrimaryColumn({ generated: true })
  id: number;

  @Column()
  eventDataId: string;

  @Column()
  hotelId: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => EventData, (eventData) => eventData.hotelToEventData)
  public eventData!: EventData;

  @ManyToOne(() => Hotel, (hotel) => hotel.hotelToEventData)
  public hotel!: Hotel;
}
export { HotelToEventData };
