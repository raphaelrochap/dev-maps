const { Router } = require('express');
const Devcontroller = require('./controllers/DevController')


const routes = Router();

routes.post('/devs', Devcontroller.store);

module.exports = routes;

