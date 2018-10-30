var http = require("http");
http.createServer(function(request,responce){

	responce.end("Hello World");

}).listen(3000,"127.0.0.1",function(){
	console.log("Server started to listen port 3000");

});