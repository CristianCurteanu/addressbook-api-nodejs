const JWT = require('../../services/jwt')
const User = require('../../models/User')

module.exports.create = function(request, response) {
    user = User.build({
        email: request.body.email,
        password: JWT.decode(request.body.password, request.cookies.uuid),
        token: request.cookies.uuid,
    }).then()
}