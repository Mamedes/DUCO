import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AppointmentCreateListBuyer from '@core/appointments/usecase/AppointmentCreateListBuyer';
import AppointmentCreateListExhibitor from '@core/appointments/usecase/AppointmentCreateListExhibitor';
import { CreateBuyerHotelExhibitorUseCase } from '@core/buyerHotelExhibitor/useCases/createHotelExhibitor/CreateBuyerHotelToExhibitorUseCase';
import { DeleteAllBuyerUseCase } from '@core/buyers/useCases/deleteBuyer/DeleteAllBuyerUseCase';
import { CreateEventDataUseCase } from '@core/eventData/useCases/createEventData/CreateEventDataUseCase';
import { DeleteAllExhibitorUseCase } from '@core/exhibitors/useCases/deleteExhibitor/DeleteAllExhibitorUseCase';
import { CreateHotelExhibitorUseCase } from '@core/hotelExhibitor/useCases/createHotelExhibitor/CreateHotelToExhibitorUseCase';

class CreateAppointmentController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { totalExhibitor, totalBuyer, eventData } = req.body;
      const deleteAllExhibitorUseCase = container.resolve(
        DeleteAllExhibitorUseCase
      );
      await deleteAllExhibitorUseCase.execute();

      const deleteAllBuyerUseCase = container.resolve(DeleteAllBuyerUseCase);
      await deleteAllBuyerUseCase.execute();

      const createListBuyer = container.resolve(AppointmentCreateListBuyer);
      const buyers = await createListBuyer.createBuyer(totalBuyer ?? 0);

      const createListExhibitor = container.resolve(
        AppointmentCreateListExhibitor
      );
      const exhibitors = await createListExhibitor.createExhibitors(
        totalExhibitor ?? 0
      );

      const eventDataUseCase = container.resolve(CreateEventDataUseCase);
      const eventDataDTO = await eventDataUseCase.execute(eventData);

      const hoteExhibitorUseCase = container.resolve(
        CreateHotelExhibitorUseCase
      );
      const hotelExhibitor = await hoteExhibitorUseCase.execute(
        eventDataDTO,
        exhibitors
      );

      const buyerHotelExhibitorUseCase = container.resolve(
        CreateBuyerHotelExhibitorUseCase
      );
      await buyerHotelExhibitorUseCase.execute(
        hotelExhibitor,
        buyers,
        eventDataDTO
      );

      // const createAppointmentUseCase = container.resolve(
      //   CreateAppointmentUseCase
      // );
      // await createAppointmentUseCase.execute();

      return res.status(201).json({ message: 'Appointment created' });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export { CreateAppointmentController };
