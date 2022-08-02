import { ColectBeepRepository } from '../../repositories/implementations/ColectBeepRepository';
import { CreateColectBeepController } from './CreateColectBeepController';
import { CreateColectBeepUseCase } from './CreateColectBeepUseCase';

const colectBeepRepository = ColectBeepRepository.getInstance();

const createColectBeepUseCase = new CreateColectBeepUseCase(colectBeepRepository);

const createColectBeepController = new CreateColectBeepController(
  createColectBeepUseCase,
);

export { createColectBeepController };
