import 'dotenv/config';
import express, { RequestHandler } from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

import { router } from './routes';
import swaggerDoc from './swagger.json';

const app = express();
app.use(cors());

app.use(express.json() as RequestHandler);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(router);

app.listen(3333, () => console.log('Server is running!'));
