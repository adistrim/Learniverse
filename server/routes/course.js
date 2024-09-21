const { Router } = require('express');

const courseRouter = Router();

courseRouter.post('/create', function (req, res) {
    res.send('Course created');
});

courseRouter.get('/all', function (req, res) {
    res.send('Course read');
});

module.exports = courseRouter;
