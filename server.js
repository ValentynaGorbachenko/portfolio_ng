// server.js

var express = require('express'),
	path = require('path'),
	app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

require('./server/config/routes.js')(app);

app.listen(8000, function(){
	console.log('Listening on port 8000');
});