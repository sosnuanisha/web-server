
var express= require('express');
//var exp = require('./app.js');
var app = express();
var middleware= require('./middleware.js');

var PORT = process.env.PORT || 3000 ;


app.use (middleware.logger);

app.get('/about',middleware.requireAuthentication, function(req,res)
{
	
	res.send("Hello Express ! !!");
});


app.use(express.static(__dirname +'/public'));

app.listen(PORT,function()
{
	
	console.log('Express server started on PORT' + PORT +' !');
});
