import express from 'express';
import user from './user.routes';
const router = express.Router();

router.use(user);

export default router;

