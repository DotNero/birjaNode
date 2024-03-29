const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const companyController = require('../controllers/company-controller');
const studentController = require('../controllers/student-controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');


router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/company-registration', authMiddleware, companyController.registraition);
router.post('/student-registration', authMiddleware, studentController.registraition);
router.post('/student-update', authMiddleware, studentController.update);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);
router.get('/test',authMiddleware, userController.test);


module.exports = router