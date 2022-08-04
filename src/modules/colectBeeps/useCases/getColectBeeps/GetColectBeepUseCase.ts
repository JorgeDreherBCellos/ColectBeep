import { ColectBeep } from '../../model/ColectBeep';
import { IColectBeepRepository } from '../../repositories/IColectBeepRepository';
// import crypto from 'crypto';

class GetColectBeepUseCase {
  constructor(private colectBeepRepository: IColectBeepRepository) { }

  async execute(): Promise<ColectBeep | Error> {
    return this.colectBeepRepository.get();
  }
}

export { GetColectBeepUseCase };
