import { Router } from 'express';
import { createColectBeepController } from '../modules/colectBeep/useCases/createColectBeep';

const colectBeepRoutes = Router();

colectBeepRoutes.post('/colectbeep', (request, response) => {
  return createColectBeepController.handle(request, response);
});

export { colectBeepRoutes };
