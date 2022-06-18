import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AppointmentCreateListExhibitor from '@core/appointments/usecase/AppointmentCreateListExhibitor';
import { DeleteAllExhibitorUseCase } from '@core/exhibitors/useCases/deleteExhibitor/DeleteAllExhibitorUseCase';

class CreateAppointmentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { totalExhibitor } = req.body;
    const deleteAllExhibitorUseCase = container.resolve(
      DeleteAllExhibitorUseCase
    );
    await deleteAllExhibitorUseCase.execute();
    await new AppointmentCreateListExhibitor(totalExhibitor).createExhibitors();

    return res.status(201).json({ message: 'Appointment created' });
  }
}

export { CreateAppointmentController };
