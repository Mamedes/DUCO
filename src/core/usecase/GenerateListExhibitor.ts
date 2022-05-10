import Exhibitor from "../entity/Exhibitor";
import Hotel from "../entity/Hotel";
import GetIdHotel from "./GetIdHotel";

export default class GenerateListExhibitor {
  totalExhibitors: number;
  exhibitorsGenerated: Array<Exhibitor> = [];
  listOfHotels: Array<Hotel>;
  constructor(listOfHotels, totalExhibitors: number) {
    this.listOfHotels = listOfHotels;
    this.totalExhibitors = totalExhibitors;
    this.generateExhibitors(this.totalExhibitors);
  }

  generateExhibitors(_totalExhibitors: number) {
    let exhibitors: Array<Exhibitor> = [];
    for (
      let idExhibitorPosition = 1;
      idExhibitorPosition <= this.totalExhibitors;
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
