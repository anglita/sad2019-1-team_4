/**
 * http://usejsdoc.org/
 */

var service = require('./../service/loginService.js');

exports.login = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end( service.login() );
}
