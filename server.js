// App setup

var express = require('express');
var app = express();

const port = 8002;

var mongoose = require('mongoose');

var User = require('./models/User');

// Middlewares includes
var bodyParser = require('body-parser');
var cookiesMiddleware = require('./middlewares/cookies')
var morgan = require('morgan')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookiesMiddleware);
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'))

// API Documentation
let swaggerSpec = require('./services/swagger/definition');
let swaggerUI = require('swagger-ui-express')
app.use('/api/documentation', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

var routes = require('./config/routes');
routes(app);

app.listen(port, function() {
    console.log('Request to http://localhost:' + port);
});