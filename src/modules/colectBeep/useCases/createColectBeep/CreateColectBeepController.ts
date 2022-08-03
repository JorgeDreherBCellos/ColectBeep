import { Request, Response } from 'express';

import { CreateColectBeepUseCase } from './CreateColectBeepUseCase';

class CreateColectBeepController {
  constructor(private createColectBeepUseCase: CreateColectBeepUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.createColectBeepUseCase.execute(request.body);
      const {reading_epc_hex,reading_created_at} = request.body;
      console.log('Request Body >>>'+request.body);

      return response.status(201).json({ message: 'Successfully registered!' });
    } catch (error) {
      return response.status(500).json({
        message:
          error.message ||
          'Mensagem descrevendo o erro que ocorreu!',
      });
    }
  }
}

export { CreateColectBeepController };
