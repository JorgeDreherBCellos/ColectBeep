import { ColectBeep } from '../model/ColectBeep';

interface IColectBeepRepository {
  create(data: ColectBeep): Promise<void | Error>;
}

export { IColectBeepRepository };
