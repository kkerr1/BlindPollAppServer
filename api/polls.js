'use strict';

exports.getPolls = (req, res) => {
  const pollCollection = [
		{ title: 'This is my first Question' },
		{ title: 'This is my second Question' }
  ];

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(pollCollection));
};
