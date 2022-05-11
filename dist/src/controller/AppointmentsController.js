"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __importDefault(require("../core/usecase/main"));
class AppointmentsController {
    static async getAppointments() {
        const listOfEventData = [
            {
                id: 1,
                name: "Day 1",
                date: "2020-01-01",
                time: "00:00:00",
                duration: "00:00:00",
                event_day: 19,
            },
            {
                id: 2,
                name: "Day 2",
                date: "2020-01-02",
                time: "00:00:00",
                duration: "00:00:00",
                event_day: 19,
            },
            {
                id: 3,
                name: "Day 3",
                date: "2020-01-03",
                time: "00:00:00",
                duration: "00:00:00",
                event_day: 14,
            },
        ];
        const hotels = [
            {
                id: 1,
                name: "Hotel A",
                email: "",
                table: 41,
            },
            {
                id: 2,
                name: "Hotel B",
                email: "",
                table: 52,
            },
            {
                id: 3,
                name: "Hotel C",
                email: "",
                table: 23,
            },
        ];
        const appointment = new main_1.default(hotels, listOfEventData);
        return appointment.generateAppointments();
    }
}
exports.default = AppointmentsController;
