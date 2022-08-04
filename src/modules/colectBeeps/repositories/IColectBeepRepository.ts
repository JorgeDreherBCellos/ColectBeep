import { ColectBeep } from '../model/ColectBeep';

interface IColectBeepRepository {
  get(): Promise<ColectBeep | Error>;
}

export { IColectBeepRepository };
