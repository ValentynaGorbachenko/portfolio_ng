// main.js

module.exports = (function(){
	var fs = require('fs');
	function Main(){
		this.resume = function(req, res){
			var filePath = "/files/ValentynaGorbachenko_resume.pdf";
			fs.readFile(__dirname + filePath , function (err,data){
				res.contentType("application/pdf");
				res.send(data);
			});
		}
	}
	return new Main();
})();