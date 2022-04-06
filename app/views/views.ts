import Router from 'express';

const router = Router();
/*
    Index all the routes from views.
        - '/' -> home page
        - '/register' -> register page
*/

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/register', (req, res) => {
    res.render('register');
})


export default router;