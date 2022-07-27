const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');
//route
route.get('/', services.homeRoutes);

route.get('/contact-owner', services.contact_owner);

//api
route.post('/api/owners',controller.create);
route.get('/api/owners',controller.find);

module.exports = route;

