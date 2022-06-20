interface ISchedule {
  id?: number;
  date: Date;
  time_start: string;
  time_end: string;
  event_day: number;
}

interface IHotel {
  id?: number;
  name: string;
  email: string;
  totalTable: number;
}
interface IEventDataResponseDTO {
  id?: number;
  secure_id?: string;
  name: string;
  days: number;
  schedules?: ISchedule[];
  hotels?: IHotel[];
}

export { IEventDataResponseDTO };
