import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AppointmentCreateListBuyer from '@core/appointments/usecase/AppointmentCreateListBuyer';
import AppointmentCreateListExhibitor from '@core/appointments/usecase/AppointmentCreateListExhibitor';
import { DeleteAllBuyerUseCase } from '@core/buyers/useCases/deleteBuyer/DeleteAllBuyerUseCase';
import { DeleteAllExhibitorUseCase } from '@core/exhibitors/useCases/deleteExhibitor/DeleteAllExhibitorUseCase';

class CreateAppointmentController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { totalExhibitor, totalBuyer } = req.body;
      const deleteAllExhibitorUseCase = container.resolve(
        DeleteAllExhibitorUseCase
      );
      await deleteAllExhibitorUseCase.execute();

      const deleteAllBuyerUseCase = container.resolve(DeleteAllBuyerUseCase);
      await deleteAllBuyerUseCase.execute();
      const createListBuyer = container.resolve(AppointmentCreateListBuyer);

      await createListBuyer.createBuyer(totalBuyer ?? 0);

      const createListExhibitor = container.resolve(
        AppointmentCreateListExhibitor
      );

      await createListExhibitor.createExhibitors(totalExhibitor ?? 0);

      return res.status(201).json({ message: 'Appointment created' });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export { CreateAppointmentController };
