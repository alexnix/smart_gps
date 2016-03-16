'use strict'

var express = require('express');
var open = require('open');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/index.html');
});


app.listen(3000, function () {
	open('http://localhost:3000');
});