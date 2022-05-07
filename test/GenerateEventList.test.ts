import Main from "../src/core/usecase/main";

const TOTAL_EXHIBITOR = 110;
const TOTAL_BUYERS = 50;
const TOTAL_DAYS = 3;
const TOTAL_EVENTS = TOTAL_EXHIBITOR * TOTAL_DAYS;
const TOTAL_EVENTS_DAY = 19;
const hotels = [
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
const TOTAL_HOTEL = hotels.length;
const maxBuyers = TOTAL_EVENTS / TOTAL_EVENTS_DAY;
const maxExhibitors = TOTAL_EVENTS / TOTAL_EVENTS_DAY;

test("Should generate event list", async () => {
  const eventList = new Main(
    TOTAL_BUYERS,
    TOTAL_EXHIBITOR,
    hotels,
    hotels.length,
    TOTAL_DAYS,
    TOTAL_EVENTS_DAY
  );
  await eventList.generateAppointments();
});
