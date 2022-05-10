import Appointment from "../entity/Appointment";
import Buyer from "../entity/Buyer";
import EventData from "../entity/EventData";
import Exhibitor from "../entity/Exhibitor";
import Hotel from "../entity/Hotel";
import GenerateAppointment from "./GenerateAppointment";
import GenerateListBuyer from "./GenerateListBuyer";
import GenerateListExhibitor from "./GenerateListExhibitor";

class Main {
  private TOTAL_BUYERS: number;
  private TOTAL_EXHIBITOR: number;
  private hotels: Array<Hotel> = [];
  private listOfExhibitors: Array<Exhibitor> = [];
  private listOfBuyers: Array<Buyer> = [];
  private listOfEventData: Array<EventData> = [];

  constructor(
    TOTAL_BUYERS: number,
    TOTAL_EXHIBITOR: number,
    hotels: Array<Hotel>,
    listOfEventData: Array<EventData>
  ) {
    this.TOTAL_BUYERS = TOTAL_BUYERS;
    this.TOTAL_EXHIBITOR = TOTAL_EXHIBITOR;
    this.hotels = hotels;
    this.listOfEventData = listOfEventData;

    this.generateExhibitors();
    this.generateBuyers();
  }
  generateExhibitors() {
    const exhibitors = new GenerateListExhibitor(
      this.hotels,
      this.TOTAL_EXHIBITOR
    );
    this.listOfExhibitors = exhibitors.exhibitorsGenerated;
  }

  generateBuyers() {
    const buyers = new GenerateListBuyer(this.TOTAL_BUYERS);
    this.listOfBuyers = buyers.BuyersGenerated;
  }

  async generateAppointments(): Promise<Array<Appointment>> {
    const appointments = new GenerateAppointment(
      this.listOfBuyers,
      this.listOfExhibitors,
      this.listOfEventData,
      this.hotels
    );
    return appointments.execute();
  }
  log(listOfExhibitors: Array<Exhibitor>, listOfBuyers: Array<Buyer>) {
    console.log(listOfExhibitors);
    console.log(listOfBuyers);
  }
}
export default Main;
