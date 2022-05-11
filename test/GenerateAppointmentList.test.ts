import EventData from "../src/core/entity/EventData";
import Hotel from "../src/core/entity/Hotel";
import Main from "../src/core/usecase/main";

test("Should generate event list", async () => {
  const listOfEventData: Array<EventData> = [
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
      event_day: 15,
    },
  ];
  const hotels: Array<Hotel> = [
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
      table: 40,
    },
  ];

  const appointments = new Main(hotels, listOfEventData);
  const appointment = await appointments.generateAppointments();

  expect(appointment.Success).toBe("Appointments generated");
});
