module.exports.ping = function(request, response) {
  response.send(request.body);
};

module.exports.links = function(request, response) {
  var prettify = function(path) {
    return 'http://' + request.headers.host + '/' + path;
  }
  response.send({
    users: prettify('users'),
    organizations: prettify('organizations')
  });
};