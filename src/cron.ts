//import "dotenv/config";
import cron from 'node-cron';

import { getColectBeepUseCase } from './modules/colectBeeps/useCases/getColectBeeps';

cron.schedule('*/10 * * * *', async () => {
  console.log('Executando a tarefa a cada 5 minuto');
  const response = await getColectBeepUseCase.execute();

  console.log(response);
});


export default cron;