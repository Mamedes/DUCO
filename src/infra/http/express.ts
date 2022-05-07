import Express from "express";

import ExpressAdapter from "../../adapter/ExpressAdapter";
import AppointmentsController from "../../controller/AppointmentsController";

const app = new Express();

app.get(
  "/appointments",
  ExpressAdapter.create(AppointmentsController.getAppointments)
);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running on port ${process.env.PORT || 3000}`)
);
