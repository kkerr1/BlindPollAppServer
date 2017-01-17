const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/polls', (req, res) => {
	
	const pollCollection = [
	{title: "This is my first Question"},
	{title: "This is my second Question"}
	];

 	res.setHeader('Content-Type', 'application/json');
 	res.send(JSON.stringify(pollCollection));
});

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(port, () => {
	console.log('Example app listening at http://localhost:%s', port);
});