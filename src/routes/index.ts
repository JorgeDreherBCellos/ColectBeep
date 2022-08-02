import { Router } from 'express';
import { colectBeepRoutes } from './colectbeepRoutes';

import { authentication } from '../middleware/authentication';

const router = Router();

router.use(authentication);

router.use('/api/v1', colectBeepRoutes);

export { router };
