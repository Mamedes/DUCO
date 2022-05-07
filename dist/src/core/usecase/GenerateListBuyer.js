"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenerateListBuyer {
    constructor(totalBuyers) {
        this.BuyersGenerated = [];
        this.totalBuyers = totalBuyers;
        this.generateBuyers(this.totalBuyers);
    }
    generateBuyers(_totalBuyers) {
        let buyersArray = [];
        for (let i = 1; i <= this.totalBuyers; i++) {
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
