var pgp = require('pg-promise')();

var cn = {
    host: '52.203.57.70',
    port: 5432,
    database: 'fide',
    user: 'normal',
    password: 'Normal2017!123'
};

var db = pgp(cn);

db.connect()
	.then(obj => {
	  console.log("Connection with database succeeded.");
	  obj.done();
	})
	.catch(error => {
	  console.log("Connection to database error.");
	  console.log("ERROR:", error.message || error);
	}
);

exports.register = {
    handler: function(request, reply) {
    	db.func('xTeam_register', [request.payload.username, request.payload.email, request.payload.password, request.payload.scope])
		    .then(data => {
		        return reply(data);
		    })
		    .catch(error => {
		    	console.log(error);
		        return reply(error);
		    }
		);
    }
};

exports.approve_request = {
    handler: function(request, reply) {
    	db.func('xTeam_approve_request', [request.payload.requestid, request.payload.userid])
		    .then(data => {
		        return reply(data);
		    })
		    .catch(error => {
		    	console.log(error);
		        return reply(error);
		    }
		);
    }
};

exports.deny_request = {
    handler: function(request, reply) {
    	db.func('xTeam_deny_request', [request.payload.requestid, request.payload.userid])
		    .then(data => {
		        return reply(data);
		    })
		    .catch(error => {
		    	console.log(error);
		        return reply(error);
		    }
		);
    }
};

exports.username_exists = {
    handler: function(request, reply) {
    	db.func('xTeam_username_exists', [request.payload.username])
		    .then(data => {
		        return reply(data);
		    })
		    .catch(error => {
		    	console.log(error);
		        return reply(error);
		    }
		);
    }
};

exports.email_exists = {
    handler: function(request, reply) {
    	db.func('xTeam_email_exists', [request.payload.email])
		    .then(data => {
		        return reply(data);
		    })
		    .catch(error => {
		    	console.log(error);
		        return reply(error);
		    }
		);
    }
};

exports.read_notification = {
    handler: function(request, reply) {
    	db.func('xTeam_read_notification', [request.payload.notificationid])
		    .then(data => {
		        return reply(data);
		    })
		    .catch(error => {
		    	console.log(error);
		        return reply(error);
		    }
		);
    }
};

exports.new_request = {
    handler: function(request, reply) {
    	db.func('xTeam_create_request', [request.payload.user_id, request.payload.first_name, request.payload.last_name, request.payload.profession,request.payload.motto, request.payload.question1, request.payload.question2])
		    .then(data => {
		        return reply(data);
		    })
		    .catch(error => {
		    	console.log(error);
		        return reply(error);
		    }
		);
    }
};

exports.get_notifications = {
    handler: function(request, reply) {
    	db.func('xTeam_get_notifications', [request.payload.userid])
		    .then(data => {
		        return reply(data);
		    })
		    .catch(error => {
		    	console.log(error);
		        return reply(error);
		    }
		);
    }
};

exports.get_user_requests = {
    handler: function(request, reply) {
    	db.func('xTeam_get_requests_user', [request.payload.userid])
		    .then(data => {
		        return reply(data);
		    })
		    .catch(error => {
		    	console.log(error);
		        return reply(error);
		    }
		);
    }
};

exports.get_requests = {
    handler: function(request, reply) {
    	db.func('xTeam_get_requests', [])
		    .then(data => {
		        return reply(data);
		    })
		    .catch(error => {
		    	console.log(error);
		        return reply(error);
		    }
		);
    }
};

exports.login = {
    handler: function(request, reply) {
    	db.func('xTeam_login', [request.payload.email,request.payload.password])
		    .then(data => {
		        return reply(data);
		    })
		    .catch(error => {
		    	console.log(error);
		        return reply(error);
		    }
		);
    }
};