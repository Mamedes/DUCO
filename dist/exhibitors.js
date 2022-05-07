"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exhibitors {
    constructor(totalExhibitors) {
        this.exhibitorsGenerated = [];
        this.totalExhibitors = totalExhibitors;
        this.generateExhibitors(this.totalExhibitors);
    }
    generateExhibitors(_totalExhibitors) {
        let exhibitors = [];
        for (let i = 1; i <= this.totalExhibitors; i++) {
            const exhibitor = {
                id: i,
                name: `Exhibitor ${i}`,
                email: `Email ${i}`,
                numberStart: i,
            };
            exhibitors.push(exhibitor);
        }
        this.exhibitorsGenerated = exhibitors;
    }
}
exports.default = Exhibitors;
