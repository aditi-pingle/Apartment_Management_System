const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');
//route
route.get('/', services.homeRoutes);

route.get('/add-owner', services.add_owner);

route.get('/update-owner', services.update_owner);

//api
route.post('/api/owners',controller.create);
route.get('/api/owners',controller.find);
route.put('/api/owners/:id',controller.update);
route.delete('/api/owners/:id',controller.delete);

module.exports = route;

