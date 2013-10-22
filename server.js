//var http = require("http");
var url = require("url");
var express = require('express');


function start(route) {

   var app = express();
   
   //Setting /public as a directory with static files
   app.use("/public", express.static(__dirname + '/public'));
    
   //For parsing post queries from client-side jQuery	
   app.use(express.bodyParser());
   
   //Sending static form on the first page
   app.get('/', function(req, res){
		res.sendfile(__dirname + '/tpl/form.html');
	});
	
   //Answering to jQuery	
   app.post('/calculate', function(req, res){
		var v1 = parseInt(req.body.v1),
		    v2 = parseInt(req.body.v2),
			result = "Error";

		switch(parseInt(req.body.op))
		{
			case 1: result = (v1 + v2); break;
			case 2: result = v1 - v2; break;
			case 3: result = v1 * v2; break;
			case 4: result = v1 / v2; break;
		}
		res.send({"result": result});
	});
	
   app.listen(8888);  
   console.log("Server has started.");
}

exports.start = start;