module.exports = function(app) {
    // var organizations = require('../api/OrganizationsResource')
    var home = require('../web/api/HomeResource');
    var clientApp = require('../web/api/ClientApplication');
    var users = require('../web/api/UserResource')

    app.route('/ping').get(home.ping);
    app.route('/').get(home.links);

    /*
    @swagger
        /client/token:
            post:
                tags:
                    - Token
                    - Client Application
                description: Register a client application which can have access to resources
                produces:
                    - application/json
                responses:
                    200:
                        description: Client application token
                        type: object
                        properties:
                            token:
                                type: string
    */
    app.post('/client/token', clientApp.register);

    /*
    @swagger
        /register:
            post:
                description: Registers a user
                produces:
                    - application/json
                responses:
                    200:
                        description: Return Authorization Token
                        type: object
                        properties:
                            token:
                                type: string
    */
    app.post('/register', users.create);
}