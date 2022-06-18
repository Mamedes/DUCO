import { Exhibitor } from '@entity/Exhibitor';

import { ICreateExhibitorDTO } from '../dtos';

interface IExhibitorsRepository {
  create(exhibitor: ICreateExhibitorDTO): Promise<void>;
  createMany(exhibitor: ICreateExhibitorDTO[]): Promise<void>;
  listAll(): Promise<Exhibitor[]>;
  deleteAll(): Promise<void>;
}

export { IExhibitorsRepository };
