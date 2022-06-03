import { Exhibitor } from '@entity/Exhibitor';

import { ICreateExhibitorDTO } from '../dtos';

interface IExhibitorsRepository {
  create(exhibitor: ICreateExhibitorDTO): Promise<void>;
  listAll(): Promise<Exhibitor[]>;
}

export { IExhibitorsRepository };
