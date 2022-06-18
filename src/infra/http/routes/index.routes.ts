import { Router } from 'express';

import { appointmentsRoutes } from './appointments.routes';

const router = Router();

router.get('/', (_req, res) => {
  res.send('Hello World!');
});
router.use('/appointments', appointmentsRoutes);

export { router };
