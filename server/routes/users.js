const { Router } = require('express');

const userRouter = Router();

userRouter.post('/signup', function(req, res) {
    res.send('User signup');
})

userRouter.post('/login', function(req, res) {
    res.send('User login');
})

module.exports = userRouter;