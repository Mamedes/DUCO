import Buyer from "../entity/Buyer";
import Hotel from "../entity/Hotel";

export default class LifoBuyerByDay {
  private listOfBuyers: Array<Buyer>;
  private listOfHOtels: Array<Hotel>;

  constructor(listOfBuyers: Array<Buyer>, listOfHOtels: Array<Hotel>) {
    this.listOfBuyers = listOfBuyers;
    this.listOfHOtels = listOfHOtels;
  }
  execute() {
    const decimalPlace = Math.min.apply(
      Math,
      this.listOfHOtels.map((hotel) => hotel.table)
    );
    let POSITION_INITIAL_CUTE = 0;
    let START_TABLE = 0;

    let TOTAL_TABLE = this.listOfHOtels.reduce(
      (acc, hotel) => acc + hotel.table,
      0
    );
    const listOfBuyersByHotel = this.getListOfBuyersByHotel(decimalPlace);

    for (
      let countBuyer = 0;
      countBuyer < listOfBuyersByHotel.length;
      countBuyer++
    ) {
      START_TABLE += this.listOfHOtels[POSITION_INITIAL_CUTE].table;
      if (countBuyer === 0) {
        this.listOfBuyers.splice(
          START_TABLE - decimalPlace,
          decimalPlace,
          ...listOfBuyersByHotel[this.listOfHOtels.length - 1]
        );
      }
      if (countBuyer > 0) {
        this.listOfBuyers.splice(
          START_TABLE - decimalPlace,
          decimalPlace,
          ...listOfBuyersByHotel[countBuyer - 1]
        );
      }
      TOTAL_TABLE -= this.listOfHOtels[countBuyer].table;
      POSITION_INITIAL_CUTE += 1;
    }

    return this.listOfBuyers;
  }
  private getListOfBuyersByHotel(decimalPlace: number) {
    let listOfBuyersByHotel = [];
    let SUM_TABLE = 0;
    for (
      let countHotel = 0;
      countHotel < this.listOfHOtels.length;
      countHotel++
    ) {
      SUM_TABLE += this.listOfHOtels[countHotel].table;

      listOfBuyersByHotel.push(
        this.listOfBuyers.slice(SUM_TABLE - decimalPlace, SUM_TABLE)
      );
    }

    return listOfBuyersByHotel;
  }
}
