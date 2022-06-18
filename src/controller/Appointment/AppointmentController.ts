import { Request, Response } from 'express';

class CreateAppointmentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { appointment } = req.body;

    return res.status(201).json({ message: 'Appointment created' });
  }
}

export { CreateAppointmentController };
