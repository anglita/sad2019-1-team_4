/**
 * http://usejsdoc.org/
 */

var fs = require('fs');
var url = require('url');

exports.openFile = function(req, res) {
	var q = url.parse(req.url, true);
	var filename = "html//." + q.pathname;
	console.log("File ->" + filename)
	fs.readFile(filename, function(err, data) {
		if (err) {
			res.writeHead(404, {
				'Content-Type' : 'text/html'
			});
			return res.end("404 Not Found");
		}
		res.writeHead(200, {
			'Content-Type' : 'text/html'
		});
		res.write(data);
		return res.end();
	});
}
