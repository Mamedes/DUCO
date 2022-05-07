import Appointment from "../entity/Appointment";
import Buyer from "../entity/Buyer";
import Exhibitor from "../entity/Exhibitor";
import GenerateListBuyer from "./GenerateListBuyer";
import GetAppointment from "./GetAppointment";
import GenerateListExhibitor from "./GenerateListExhibitor";

type Hotel = {
  id: number;
  name: string;
  email: string;
  table: number;
};
class Main {
  private TOTAL_BUYERS: number;
  private TOTAL_EXHIBITOR: number;
  private hotels: Array<Hotel> = [];
  private TOTAL_HOTEL: number;
  private listOfExhibitors: Array<Exhibitor> = [];
  private listOfBuyers: Array<Buyer> = [];
  private TOTAL_DAYS: number;
  private listOfAppointments: Array<Appointment> = [];
  private TOTAL_EVENT_DAY: number;

  constructor(
    TOTAL_BUYERS: number,
    TOTAL_EXHIBITOR: number,
    hotels: Array<Hotel>,
    TOTAL_HOTEL: number,
    TOTAL_DAYS: number,
    TOTAL_EVENT_DAY: number
  ) {
    this.TOTAL_BUYERS = TOTAL_BUYERS;
    this.TOTAL_EXHIBITOR = TOTAL_EXHIBITOR;
    this.hotels = hotels;
    this.TOTAL_HOTEL = TOTAL_HOTEL;
    this.TOTAL_DAYS = TOTAL_DAYS;
    this.TOTAL_EVENT_DAY = TOTAL_EVENT_DAY;

    //this.log(this.listOfExhibitors, this.listOfBuyers);
    this.generateExhibitors();
    this.generateBuyers();
  }
  generateExhibitors() {
    const exhibitors = new GenerateListExhibitor(this.TOTAL_EXHIBITOR);
    this.listOfExhibitors = exhibitors.exhibitorsGenerated;
  }

  generateBuyers() {
    const buyers = new GenerateListBuyer(this.TOTAL_BUYERS);
    this.listOfBuyers = buyers.BuyersGenerated;
  }

  async generateAppointments() {
    const appointments = new GetAppointment(
      this.hotels,
      this.TOTAL_HOTEL,
      this.listOfBuyers,
      this.listOfExhibitors,
      this.TOTAL_EVENT_DAY,
      this.TOTAL_DAYS
    );
    return appointments.execute();
  }
  log(listOfExhibitors: Array<Exhibitor>, listOfBuyers: Array<Buyer>) {
    console.log(listOfExhibitors);
    console.log(listOfBuyers);
  }
}
export default Main;
