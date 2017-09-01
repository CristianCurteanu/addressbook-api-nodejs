var swaggerJSDoc = require('swagger-jsdoc')

var swaggerDefinition = {
    info: {
        title: 'AddressBook REST API',
        version: '0.0.1',
        description: 'This is a training REST API project on NodeJS'
    },
    host: 'localhost:3000',
    basepath: '/'
}

module.exports = swaggerJSDoc({
    swaggerDefinition: swaggerDefinition,
    apis: ['../../config/routes.js', '../../config/routes/*.js']
})