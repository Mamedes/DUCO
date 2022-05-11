import Exhibitor from "../entity/Exhibitor";
import Hotel from "../entity/Hotel";
import GetIdHotel from "./GetIdHotel";

export default class GenerateListExhibitor {
  exhibitorsGenerated: Array<Exhibitor> = [];
  listOfHotels: Array<Hotel>;
  constructor(listOfHotels) {
    this.listOfHotels = listOfHotels;

    this.generateExhibitors();
  }

  generateExhibitors() {
    const TOTAL_EXHIBITOR = this.listOfHotels.reduce(
      (acc, hotel) => acc + hotel.table,
      0
    );
    let exhibitors: Array<Exhibitor> = [];
    for (
      let idExhibitorPosition = 1;
      idExhibitorPosition <= TOTAL_EXHIBITOR;
      idExhibitorPosition++
    ) {
      let idHotel = new GetIdHotel(
        this.listOfHotels,
        idExhibitorPosition
      ).execute();

      const exhibitor: Exhibitor = {
        id: idExhibitorPosition,
        name: `Exhibitor ${idExhibitorPosition}`,
        email: `Email ${idExhibitorPosition}`,
        idHotel: idHotel,
        appointments: [],
      };
      exhibitors.push(exhibitor);
    }
    this.exhibitorsGenerated = exhibitors;
  }
}
