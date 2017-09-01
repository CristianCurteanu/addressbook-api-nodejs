const Client = require('../models/Client');
const uuid = require('uuid');
const JsonWebToken = require('../services/jwt');

module.exports.register = function(request, response) {
    let uuidSecret = uuid.v4();
    let token = JsonWebToken.encode(request.body.email, uuidSecret);
    client = Client.build({
        email: request.body.email,
        uuid: uuidSecret,
        key: token
    })
    if (client.save()) {
        if (process.env.NODE_ENV === 'development') {
            response.send({ token: token, uuid: uuidSecret })
        } else {
            response.send({ token: token })
        }
    } else {
        response.status(500)
        response.send({ fail: 'Client not updated' })
    }
}