// App setup

var express = require('express');
var app = express();

const port = 8002;

var mongoose = require('mongoose');

var User = require('./models/User');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API Documentation
let swaggerSpec = require('./services/swagger/definition');
let swaggerUI = require('swagger-ui-express')
app.use('/api/documentation', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

var routes = require('./config/routes');
routes(app);

app.listen(port, function() {
    console.log('Request to http://localhost:' + port);
});