import { Router } from 'express';

import { CreateAppointmentController } from '@controller/Appointment/AppointmentController';

const appointmentsRoutes = Router();

const createAppointmentController = new CreateAppointmentController();

appointmentsRoutes.post('/', createAppointmentController.handle);

export { appointmentsRoutes };
