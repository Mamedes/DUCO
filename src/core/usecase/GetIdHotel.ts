import Hotel from "../entity/Hotel";

export default class GetIdHotel {
  private listOfHotel: Array<Hotel>;
  private idExhibitor: number;

  constructor(listOfHotel: Array<Hotel>, idExhibitor: number) {
    this.listOfHotel = listOfHotel;
    this.idExhibitor = idExhibitor;
  }
  execute(): number {
    let positionTable = 0;
    for (const hotel of this.listOfHotel) {
      positionTable += hotel.table;
      if (this.idExhibitor <= positionTable) {
        return hotel.id;
      }
    }
    return 0;
  }
}
