"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetAppointment {
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
        let numberOfAppointments = 0;
        let idAppointment = 0;
        const event_day = [19, 19, 17];
        for (let day = 0; day < this.TOTAL_DAYS; day++) {
            for (let i = 1; i <= event_day[day]; i++) {
                numberOfAppointments = numberOfAppointments + 1;
                const appointment = {
                    id: i,
                    idExhibitor: this.listOfExhibitors[0].id,
                    idBuyer: i,
                    day: day === 0 ? 1 : day,
                    appointmentNumber: numberOfAppointments,
                    idHotel: 1,
                };
                // if (
                //   this.appointmentsExist(
                //     appointment.idExhibitor,
                //     appointment.idBuyer,
                //     appointment
                //   )
                // ) {
                //   return [];
                // }
                this.listOfAppointments.push(appointment);
            }
        }
        return this.listOfAppointments;
    }
    appointmentsExist(idExhibitor, idBuyer, appointment) {
        for (let i = 0; i < this.listOfAppointments.length; i++) {
            if (this.listOfAppointments[i].idExhibitor === idExhibitor &&
                this.listOfAppointments[i].idBuyer === idBuyer) {
                return true;
            }
        }
        return false;
    }
}
exports.default = GetAppointment;
