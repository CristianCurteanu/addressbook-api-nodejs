var JWT = require('jsonwebtoken')

const TokenDecode = (function() {
    function decodeToken(token, secret, callback) {
        JWT.verify(token, secret, { algorithms: ['RS256'] }, function(error, decoded) {
            if (error) {
                return error
            } else {
                return callback(decoded.payload)
            }
        })
    }

    return {
        payload: function(token, secret) {
            return decodeToken(token, secret, function(decoded) {
                return decoded.payload
            })
        },

        isExpired: function(token, secret) {
            return decodeToken(token, secret).name === 'TokenExpiredError'
        }
    }
})();

module.exports.encode = function(value, secret) {
    return JWT.sign({ data: value }, secret, { expiresIn: 1800 });
}

module.exports.decode = function(token, secret) {
    return TokenDecode.payload(token, secret)
}

module.exports.isExpired = function(token, secret) {
    return TokenDecode.isExpired(token, secret)
}