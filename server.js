const express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	morgan = require('morgan'),
	path = require('path'),
	cookieParser = require('cookie-parser');
	app = express(),
	router = require('./router/router'),
	women = require('./router/women');

mongoose.connect('mongodb://willylu:willylu@ds119718.mlab.com:19718/emp-db');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', router);
app.use('/api2', women);

app.use((req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.listen(3000, () => {console.log('mean stack server is started')});