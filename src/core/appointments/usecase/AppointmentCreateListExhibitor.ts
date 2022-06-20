import { container } from 'tsyringe';

import { ICreateExhibitorDTO } from '@core/exhibitors/dtos';
import { CreateManyExhibitorUseCase } from '@core/exhibitors/useCases/createExhibitor/CreateManyExhibitorUseCase';
import { Exhibitor } from '@entity/Exhibitor';

export default class AppointmentCreateListExhibitor {
  async createExhibitors(totalExhibitor: number): Promise<Exhibitor[]> {
    const createManyExhibitorUseCase = container.resolve(
      CreateManyExhibitorUseCase
    );
    const exhibitors = [] as ICreateExhibitorDTO[];

    for (let i = 1; i <= totalExhibitor; i += 1) {
      const exhibitor = {
        name: `Exhibitor ${i}`,
        email: `exhibitor${i}@email.com`,
        phone: ` ${i}`,
      };
      exhibitors.push(exhibitor);
    }

    return createManyExhibitorUseCase.execute(exhibitors);
  }
}
