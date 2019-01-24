'use strict';

const express = require('express');

// Constants
const PORT = 8080; 
const HOST = '0.0.0.0';

// App
const app = express();

var process = require('./process/processRequest.js');

// Welcome
app.get('/', (req, res) => { process.welcome(req, res); });

// Login
app.get('/login', (req, res) => { process.login(req, res); });

// Login
app.get('/post.html', (req, res) => { process.openFile(req, res); });


// Server - Params
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
