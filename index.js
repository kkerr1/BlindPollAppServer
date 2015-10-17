'use strict';

const PORT = 4000;
let express = require('express');
let app = express();

app.get('/polls', (req, res) => {
	
	var pollCollection = [
	{title: "This is my first Question"},
	{title: "This is my second Question"}
	];

 	res.setHeader('Content-Type', 'application/json');
 	res.send(JSON.stringify(pollCollection));
});

let server = app.listen(PORT, () => {
	let host = server.address().address;
	let port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});