interface ISchedule {
  date: Date;
  time_start: string;
  time_end: string;
}

interface IHotel {
  name: string;
  email: string;
  totalTable: number;
}

interface ICreateEventDataDTO {
  name: string;
  days: number;
  event_day: number;
  schedules: [ISchedule];
  hotels: [IHotel];
}

export { ICreateEventDataDTO };
