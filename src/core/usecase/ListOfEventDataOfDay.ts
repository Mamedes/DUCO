import EventData from "../entity/EventData";

export default class ListOfEventDataOfDay {
  private listOfEventData: Array<EventData>;
  constructor(listOfEventData: Array<EventData>) {
    this.listOfEventData = listOfEventData;
  }
  execute(): Array<number> {
    return this.listOfEventData.map((eventData) => {
      return eventData.event_day;
    });
  }
}
