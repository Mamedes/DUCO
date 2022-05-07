"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exhibitors_1 = __importDefault(require("./exhibitors"));
class CalculoAppointment {
    constructor() {
        this.TOTAL_BUYERS = 30;
        this.TOTAL_EXHIBITOR = 60;
        this.hotel = [
            { TOTAL_TABLES: 30, TOTAL_TABLES_EXHIBITOR: 28 },
            { TOTAL_TABLES: 33, TOTAL_TABLES_EXHIBITOR: 33 },
            { TOTAL_TABLES: 28, TOTAL_TABLES_EXHIBITOR: 27 },
            { TOTAL_TABLES: 29, TOTAL_TABLES_EXHIBITOR: 29 },
        ];
        this.TOTAL_HOTEL = this.hotel.length;
        this.exhibitors = new exhibitors_1.default(this.TOTAL_EXHIBITOR);
        this.listOfExhibitors = this.exhibitors.exhibitorsGenerated;
        this.log(this.listOfExhibitors);
    }
    log(listOfExhibitors = this.exhibitors.exhibitorsGenerated) {
        console.log(listOfExhibitors);
    }
}
const calc = new CalculoAppointment();
calc;
