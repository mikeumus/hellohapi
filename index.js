var Hapi = require('hapi');

var server = new Hapi.Server(8000);

server.route({method: "GET", path:'/', handler: function(request){
	
	request.reply("Hello Hapi");
}});

server.start();
