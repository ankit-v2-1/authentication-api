import { Router, Request, Response } from 'express';
import { createUserHandler, validateUserHandler } from '../controler/user.controler';

const router = Router();

// Create endpoint for user authentication.

router.post('/register', createUserHandler);
router.post('/login', validateUserHandler);

export default router;