import Buyer from "../entity/Buyer";
import Hotel from "../entity/Hotel";

export default class GenerateListBuyer {
  BuyersGenerated: Array<Buyer> = [];
  private listOfHotels: Array<Hotel>;
  constructor(listOfHotels) {
    this.listOfHotels = listOfHotels;
    this.generateBuyers();
  }

  generateBuyers() {
    const TOTAL_BUYERS = this.listOfHotels.reduce(
      (acc, hotel) => acc + hotel.table,
      0
    );
    let buyersArray: Array<Buyer> = [];
    for (let countBuyer = 1; countBuyer <= TOTAL_BUYERS; countBuyer++) {
      buyersArray.push({
        id: countBuyer,
        name: `Buyer ${countBuyer}`,
        email: `Email ${countBuyer}`,
        appointments: [],
      });
    }
    this.BuyersGenerated = buyersArray;
  }
}
