import { container } from 'tsyringe';

import { ICreateExhibitorDTO } from '@core/exhibitors/dtos';
import { CreateManyExhibitorUseCase } from '@core/exhibitors/useCases/createExhibitor/CreateManyExhibitorUseCase';

export default class AppointmentCreateListExhibitor {
  private totalExhibitor: number;
  constructor(totalExhibitor: number) {
    this.totalExhibitor = totalExhibitor;
  }

  async createExhibitors() {
    const createManyExhibitorUseCase = container.resolve(
      CreateManyExhibitorUseCase
    );
    const exhibitors = [] as ICreateExhibitorDTO[];

    for (let i = 1; i <= this.totalExhibitor; i += 1) {
      const exhibitor = {
        name: `Exhibitor ${i}`,
        email: `exhibitor${i}@email.com`,
        phone: ` ${i}`,
      };
      exhibitors.push(exhibitor);
    }
    if (exhibitors.length > 0) {
      await createManyExhibitorUseCase.execute(exhibitors);
    }
  }
}
