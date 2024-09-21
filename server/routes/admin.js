const { Router } = require('express');

const adminRouter = Router();

adminRouter.post('/signup', function(req, res) {
    res.send('Admin signup');
})

adminRouter.post('/login', function(req, res) {
    res.send('Admin login');
})

module.exports = adminRouter;