"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ExpressAdapter_1 = __importDefault(require("../../adapter/ExpressAdapter"));
const AppointmentsController_1 = __importDefault(require("../../controller/AppointmentsController"));
const app = new express_1.default();
app.get("/appointments", ExpressAdapter_1.default.create(AppointmentsController_1.default.getAppointments));
app.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${process.env.PORT || 3000}`));
