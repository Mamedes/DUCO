"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GenerateAppointment_1 = __importDefault(require("./GenerateAppointment"));
const GenerateListBuyer_1 = __importDefault(require("./GenerateListBuyer"));
const GenerateListExhibitor_1 = __importDefault(require("./GenerateListExhibitor"));
class Main {
    constructor(hotels, listOfEventData) {
        this.hotels = [];
        this.listOfExhibitors = [];
        this.listOfBuyers = [];
        this.listOfEventData = [];
        this.hotels = hotels;
        this.listOfEventData = listOfEventData;
        this.generateExhibitors();
        this.generateBuyers();
    }
    generateExhibitors() {
        const exhibitors = new GenerateListExhibitor_1.default(this.hotels);
        this.listOfExhibitors = exhibitors.exhibitorsGenerated;
    }
    generateBuyers() {
        const buyers = new GenerateListBuyer_1.default(this.hotels);
        this.listOfBuyers = buyers.BuyersGenerated;
    }
    async generateAppointments() {
        const appointments = new GenerateAppointment_1.default(this.listOfBuyers, this.listOfExhibitors, this.listOfEventData, this.hotels);
        return appointments.execute();
    }
    log(listOfExhibitors, listOfBuyers) {
        console.log(listOfExhibitors);
        console.log(listOfBuyers);
    }
}
exports.default = Main;
