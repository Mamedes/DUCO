"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Appointments {
    constructor(hotels, TOTAL_HOTEL, listOfBuyers, listOfExhibitors, TOTAL_EVENT_DAY, TOTAL_DAYS) {
        this.listOfAppointments = [];
        this.listOfBuyers = [];
        this.listOfExhibitors = [];
        this.hotels = hotels;
        this.TOTAL_HOTEL = TOTAL_HOTEL;
        this.TOTAL_DAYS = TOTAL_DAYS;
        this.TOTAL_EVENT_DAY = TOTAL_EVENT_DAY;
        this.listOfExhibitors = listOfExhibitors;
        this.listOfBuyers = listOfBuyers;
    }
    async execute() {
        const TOTAL_EXHIBITOR = this.listOfExhibitors.length;
        const TOTAL_BUYERS = this.listOfBuyers.length;
        const TOTAL_HOTEL = this.hotels.length;
        for (let [indexExhibitors, exhibitor] of this.listOfExhibitors.entries()) {
            for (let [indexBuyers, buyer] of this.listOfBuyers.entries()) {
                for (let i = 0; i < this.TOTAL_EVENT_DAY; i++) {
                    const appointment = {
                        id: indexExhibitors + 1,
                        idBuyer: buyer.id,
                        idExhibitor: exhibitor.id,
                        day: 0,
                        appointmentNumber: 0,
                    };
                    for (let day = 1; day <= this.TOTAL_EVENT_DAY; day++) {
                        this.listOfAppointments.push(appointment);
                        this.listOfExhibitors[indexExhibitors] = {
                            ...buyer,
                            appointments: this.listOfExhibitors[indexExhibitors].appointments.concat(appointment),
                        };
                        this.listOfBuyers[indexBuyers] = {
                            ...exhibitor,
                            appointments: this.listOfBuyers[indexBuyers].appointments.concat(appointment),
                        };
                    }
                }
            }
        }
        return this.listOfAppointments;
    }
}
exports.default = Appointments;
