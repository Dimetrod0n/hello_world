var http = require("http");
http.createServer(function(request,responce){
		
	responce.end("Test is ongoing");
	
});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
