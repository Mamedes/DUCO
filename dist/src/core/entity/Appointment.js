"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Appointment {
    constructor(id, idBuyer, idExhibitor, day, appointmentNumber, idHotel) {
        this.id = id;
        this.idBuyer = idBuyer;
        this.idExhibitor = idExhibitor;
        this.day = day;
        this.appointmentNumber = appointmentNumber;
        this.idHotel = idHotel;
    }
}
exports.default = Appointment;
