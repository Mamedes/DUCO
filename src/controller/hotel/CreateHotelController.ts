import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateHotelUseCase } from '@core/hotel/useCases/createHotel/CreateHotelUseCase';

class CreateHotelController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { hotel } = req.body;

    const createHotelUserCase = container.resolve(CreateHotelUseCase);

    await createHotelUserCase.execute(hotel);

    return res.status(201).json({ message: 'Hotel created' });
  }
}

export { CreateHotelController };
