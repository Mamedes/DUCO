import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateBuyerUseCase } from '@core/buyers/useCases/createBuyer/CreateBuyerUseCase';

class CreateBuyerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { buyer } = req.body;

    const createBuyerUserCase = container.resolve(CreateBuyerUseCase);

    await createBuyerUserCase.execute(buyer);

    return res.status(201).json({ message: 'Buyer created' });
  }
}

export { CreateBuyerController };
