var dbController = require('./controllers/database.controller');

exports.endpoints = [
	{method: 'GET', path: '/', config: {handler: function(request, reply){reply('Unauthorized Access')}}},
	{method: 'POST', path: '/register', config: dbController.register},
	{method: 'POST', path: '/username_exists', config: dbController.username_exists},
	{method: 'POST', path: '/email_exists', config: dbController.email_exists},
	{method: 'POST', path: '/login', config: dbController.login},
	{method: 'POST', path: '/read_notification', config: dbController.read_notification},
	{method: 'POST', path: '/get_notifications', config: dbController.get_notifications},
	{method: 'POST', path: '/new_request', config: dbController.new_request},
	{method: 'POST', path: '/get_user_requests', config: dbController.get_user_requests},
	{method: 'POST', path: '/get_requests', config: dbController.get_requests},
	{method: 'POST', path: '/approve_request', config: dbController.approve_request},
	{method: 'POST', path: '/deny_request', config: dbController.deny_request}

];
