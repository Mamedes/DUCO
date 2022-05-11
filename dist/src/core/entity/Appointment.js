"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Appointment {
    constructor(id, idBuyer, idExhibitor, day, appointmentNumber) {
        this.id = id;
        this.idBuyer = idBuyer;
        this.idExhibitor = idExhibitor;
        this.day = day;
        this.appointmentNumber = appointmentNumber;
    }
}
exports.default = Appointment;
