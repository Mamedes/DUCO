"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenerateListBuyer {
    constructor(listOfHotels) {
        this.BuyersGenerated = [];
        this.listOfHotels = listOfHotels;
        this.generateBuyers();
    }
    generateBuyers() {
        const TOTAL_BUYERS = this.listOfHotels.reduce((acc, hotel) => acc + hotel.table, 0);
        let buyersArray = [];
        for (let i = 1; i <= TOTAL_BUYERS; i++) {
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
exports.default = GenerateListBuyer;
