interface ISchedule {
  date: Date;
  time_start: string;
  time_end: string;
  event_day: number;
}

interface IHotel {
  name: string;
  email: string;
  totalTable: number;
}
interface IEventDataResponseDTO {
  id?: string;
  name: string;
  days: number;
  schedules: [ISchedule];
  hotels: [IHotel];
}

export { IEventDataResponseDTO };
