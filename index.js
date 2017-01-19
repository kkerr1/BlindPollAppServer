'use strict';

const express = require('express');
const app = express();
const conf = require('config');
const polls = require('./api/polls');

const port = conf.get('server.port');

app.get('/polls', polls.getPolls);

app.listen(port, () => {
  console.log('Example app listening at http://localhost:%s', port); // eslint-disable-line no-console
});
