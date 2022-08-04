import { ColectBeepRepository } from '../../repositories/implementations/ColectBeepRepository';
import { GetColectBeepUseCase } from './GetColectBeepUseCase';

const colectBeepRepository = ColectBeepRepository.getInstance();

const getColectBeepUseCase = new GetColectBeepUseCase(colectBeepRepository);

export { getColectBeepUseCase };
