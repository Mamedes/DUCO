import Buyer from "../entity/Buyer";

export default class GenerateListBuyer {
  totalBuyers: number;
  BuyersGenerated: Array<Buyer> = [];

  constructor(totalBuyers: number) {
    this.totalBuyers = totalBuyers;
    this.generateBuyers(this.totalBuyers);
  }

  generateBuyers(_totalBuyers: number) {
    let buyersArray: Array<Buyer> = [];
    for (let i = 1; i <= this.totalBuyers; i++) {
      buyersArray.push({
        id: i,
        name: `Buyer ${i}`,
        email: `Email ${i}`,
        appointments: [],
      });
    }
    this.BuyersGenerated = buyersArray;
  }
}
