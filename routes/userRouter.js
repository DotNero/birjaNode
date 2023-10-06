const express = require('express');
const userController = require('../controllers/userController.js');
const userRouter = express.Router();

userRouter.use("/create", userController.addUser);


module.exprots = userRouter;