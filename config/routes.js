module.exports = function(app) {
    // var organizations = require('../api/OrganizationsResource')
    var home = require('../api/HomeResource');
    var clientApp = require('../api/ClientApplication');

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
}