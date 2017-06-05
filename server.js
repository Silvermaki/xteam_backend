var hapi = require('hapi');
var inert = require('inert');
var routes = require('./routes');
var auth = require('hapi-auth-cookie');


var server = new hapi.Server();
server.connection({
    port: ~~process.env.PORT || 8000,
    routes: { cors:true}});


server.register([inert, auth], function(err){
	server.route(routes.endpoints);
	server.start(function () {
	    console.log('Server running at:', server.info.uri);
	});
});


