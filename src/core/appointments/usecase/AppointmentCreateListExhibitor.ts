import { container } from 'tsyringe';

import { ICreateExhibitorDTO } from '@core/exhibitors/dtos';
import { CreateManyExhibitorUseCase } from '@core/exhibitors/useCases/createExhibitor/CreateManyExhibitorUseCase';

export default class AppointmentCreateListExhibitor {
  async createExhibitors(totalExhibitor: number) {
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

    await createManyExhibitorUseCase.execute(exhibitors);
  }
}
