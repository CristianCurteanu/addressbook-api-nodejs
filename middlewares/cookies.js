var http = require('http');

module.exports = function(request, response, next) {
    let list = {};
    let rc = request.headers.cookie;

    rc && rc.split(';').forEach(function(cookie) {
        let parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    request.cookies = list;
    next();
}