import Buyer from "../entity/Buyer";
import Hotel from "../entity/Hotel";

export default class MoveBuyerInHotel {
  private listOfBuyers: Array<Buyer>;
  private listOfHOtels: Array<Hotel>;

  constructor(listOfBuyers: Array<Buyer>, listOfHOtels: Array<Hotel>) {
    this.listOfBuyers = listOfBuyers;
    this.listOfHOtels = listOfHOtels;
  }
  execute(): Array<Buyer> {
    const tableValue = this.listOfHOtels.map((hotel) => hotel.table);
    let sumTable = 0;
    let positionInitialTable = 0;

    for (let qtdTable = 0; qtdTable < tableValue.length; qtdTable++) {
      sumTable += tableValue[qtdTable];

      let buyer = this.listOfBuyers[sumTable - 1];

      this.listOfBuyers.splice(sumTable - 1, 1);

      this.listOfBuyers.splice(positionInitialTable, 0, buyer);

      positionInitialTable += tableValue[qtdTable];
    }

    return this.listOfBuyers;
  }
}
