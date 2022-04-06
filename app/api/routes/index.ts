import express from 'express';
import user from './user.routes';
const router = express.Router();

// Index of all the routes in API.


/*
    - '/register' -> create users.
    - '/login' -> validate users.

*/
router.use(user);



// export all the routes to server.ts.
export default router;

