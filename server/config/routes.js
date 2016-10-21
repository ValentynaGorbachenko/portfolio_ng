// routes.js
var main = require('./../controllers/main.js')
module.exports = function(app){
	app.get('/resume', main.resume);
};