"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GenerateListBuyer_1 = __importDefault(require("./GenerateListBuyer"));
const GetAppointment_1 = __importDefault(require("./GetAppointment"));
const GenerateListExhibitor_1 = __importDefault(require("./GenerateListExhibitor"));
class Main {
    constructor(TOTAL_BUYERS, TOTAL_EXHIBITOR, hotels, TOTAL_HOTEL, TOTAL_DAYS, TOTAL_EVENT_DAY) {
        this.hotels = [];
        this.listOfExhibitors = [];
        this.listOfBuyers = [];
        this.listOfAppointments = [];
        this.TOTAL_BUYERS = TOTAL_BUYERS;
        this.TOTAL_EXHIBITOR = TOTAL_EXHIBITOR;
        this.hotels = hotels;
        this.TOTAL_HOTEL = TOTAL_HOTEL;
        this.TOTAL_DAYS = TOTAL_DAYS;
        this.TOTAL_EVENT_DAY = TOTAL_EVENT_DAY;
        //this.log(this.listOfExhibitors, this.listOfBuyers);
        this.generateExhibitors();
        this.generateBuyers();
    }
    generateExhibitors() {
        const exhibitors = new GenerateListExhibitor_1.default(this.TOTAL_EXHIBITOR);
        this.listOfExhibitors = exhibitors.exhibitorsGenerated;
    }
    generateBuyers() {
        const buyers = new GenerateListBuyer_1.default(this.TOTAL_BUYERS);
        this.listOfBuyers = buyers.BuyersGenerated;
    }
    async generateAppointments() {
        const appointments = new GetAppointment_1.default(this.hotels, this.TOTAL_HOTEL, this.listOfBuyers, this.listOfExhibitors, this.TOTAL_EVENT_DAY, this.TOTAL_DAYS);
        return appointments.execute();
    }
    log(listOfExhibitors, listOfBuyers) {
        console.log(listOfExhibitors);
        console.log(listOfBuyers);
    }
}
exports.default = Main;
