import { ColectBeep } from '../../model/ColectBeep';
import { IColectBeepRepository } from '../../repositories/IColectBeepRepository';
// import crypto from 'crypto';

class CreateColectBeepUseCase {
  constructor(private colectBeepRepository: IColectBeepRepository) {}

  async execute(data: ColectBeep): Promise<void> {
    await this.colectBeepRepository.create(data);
  }
}

export { CreateColectBeepUseCase };
