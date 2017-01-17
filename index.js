var port = process.env.PORT || 3000,
var express = require('express');
var app = express();

app.get('/polls', (req, res) => {
	
	var pollCollection = [
	{title: "This is my first Question"},
	{title: "This is my second Question"}
	];

 	res.setHeader('Content-Type', 'application/json');
 	res.send(JSON.stringify(pollCollection));
});

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(PORT, () => {
	console.log('Example app listening at http://localhost:%s', PORT);
});