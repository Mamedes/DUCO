export default class EventData {
  id: number;
  name: string;
  date: string;
  time: string;
  duration: string;
  event_day: number;
  constructor(
    id: number,
    name: string,
    date: string,
    time: string,
    duration: string,
    event_day: number
  ) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.time = time;
    this.duration = duration;
    this.event_day = event_day;
  }
}
