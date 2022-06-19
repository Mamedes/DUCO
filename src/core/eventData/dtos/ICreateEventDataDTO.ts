interface ISchedule {
  date: Date;
  time_start: string;
  time_end: string;
}
interface ICreateEventDataDTO {
  name: string;
  days: number;
  event_day: number;
  schedule: [ISchedule];
}

export { ICreateEventDataDTO };
