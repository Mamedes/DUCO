import EventData from "../entity/EventData";

export default class GetTotalDay {
  private listOfEventData: Array<EventData>;
  constructor(listOfEventData: Array<EventData>) {
    this.listOfEventData = listOfEventData;
  }
  execute(): number {
    return this.listOfEventData.length;
  }
}
