
var express= require('express');
//var exp = require('./app.js');
var app = express();

var middleware = {
   
   requireAuthentication : function(req, res, next)
   {
	   console.log('Private route hit..');
	   next();
   },
   logger: function(req,res,next)
   {
	   
	   console.log('Request' + req.method + req.originalurl);
	   console.log(new Date().toString());
	   next();
   }
   	
 	
};

app.use (middleware.logger);

app.get('/about',middleware.requireAuthentication, function(req,res)
{
	
	res.send("Hello Express !!");
});


app.use(express.static(__dirname +'/public'));

app.listen(3000);
