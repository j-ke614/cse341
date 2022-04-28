const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Jason Bourne');
});

module.exports = routes;