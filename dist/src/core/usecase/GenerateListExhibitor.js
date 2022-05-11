"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GetIdHotel_1 = __importDefault(require("./GetIdHotel"));
class GenerateListExhibitor {
    constructor(listOfHotels) {
        this.exhibitorsGenerated = [];
        this.listOfHotels = listOfHotels;
        this.generateExhibitors();
    }
    generateExhibitors() {
        const TOTAL_EXHIBITOR = this.listOfHotels.reduce((acc, hotel) => acc + hotel.table, 0);
        let exhibitors = [];
        for (let idExhibitorPosition = 1; idExhibitorPosition <= TOTAL_EXHIBITOR; idExhibitorPosition++) {
            let idHotel = new GetIdHotel_1.default(this.listOfHotels, idExhibitorPosition).execute();
            const exhibitor = {
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
exports.default = GenerateListExhibitor;
