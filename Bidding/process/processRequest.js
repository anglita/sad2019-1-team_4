/**
 * http://usejsdoc.org/
 */

var loginController = require('./../controller/loginController.js');
var htmlFileRouter = require('./htmlFileRouter.js');

exports.welcome = function(req, res) {
	res.send("Welcome to Bidding App!");
}

exports.openFile = function(req, res) {
	htmlFileRouter.openFile(req, res);
}

exports.login = function(req, res) {
	loginController.login(req, res);
}
