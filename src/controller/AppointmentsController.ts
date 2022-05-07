import Main from "../core/usecase/main";

export default class AppointmentsController {
  static async getAppointments() {
    const TOTAL_EXHIBITOR = 116;
    const TOTAL_BUYERS = 50;
    const TOTAL_DAYS = 3;
    const CONFIG_EVENT = [
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
        event_day: 17,
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

    const eventList = new Main(
      TOTAL_BUYERS,
      TOTAL_EXHIBITOR,
      hotels,
      hotels.length,
      TOTAL_DAYS,
      CONFIG_EVENT.length
    );
    return eventList.generateAppointments();
  }
}
