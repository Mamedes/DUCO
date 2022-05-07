import Exhibitor from "../entity/Exhibitor";

export default class GenerateListExhibitor {
  totalExhibitors: number;
  exhibitorsGenerated: Array<Exhibitor> = [];

  constructor(totalExhibitors: number) {
    this.totalExhibitors = totalExhibitors;
    this.generateExhibitors(this.totalExhibitors);
  }

  generateExhibitors(_totalExhibitors: number) {
    let exhibitors: Array<Exhibitor> = [];
    for (let i = 1; i <= this.totalExhibitors; i++) {
      const exhibitor: Exhibitor = {
        id: i,
        name: `Exhibitor ${i}`,
        email: `Email ${i}`,
        appointments: [],
      };
      exhibitors.push(exhibitor);
    }
    this.exhibitorsGenerated = exhibitors;
  }
}
