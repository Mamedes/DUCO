"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __importDefault(require("../src/main"));
const TOTAL_EXHIBITOR = 110;
const TOTAL_BUYERS = 50;
const TOTAL_DAYS = 3;
const TOTAL_EVENTS = TOTAL_EXHIBITOR * TOTAL_DAYS;
const TOTAL_EVENTS_DAY = 19;
const hotel = [
  {
    id: 1,
    name: "Hotel 1",
    email: "",
    table: 41,
  },
  {
    id: 2,
    name: "Hotel 2",
    email: "",
    table: 52,
  },
  {
    id: 3,
    name: "Hotel 3",
    email: "",
    table: 23,
  },
];
const TOTAL_HOTEL = hotel.length;
const maxBuyers = TOTAL_EVENTS / TOTAL_EVENTS_DAY;
const maxExhibitors = TOTAL_EVENTS / TOTAL_EVENTS_DAY;
test("Should generate event list", () => {
  const eventList = new main_1.default(
    TOTAL_BUYERS,
    TOTAL_EXHIBITOR,
    hotel,
    hotel.length,
    TOTAL_DAYS
  );
  // expect(eventList.listOfExhibitors.length).toBe(60);
});
