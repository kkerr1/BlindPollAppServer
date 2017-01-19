'use strict';
const es = require('../db/es');

exports.getPolls = (req, res, next) => {
  return es.getNearbyPolls()
    .then((polls) => {
      res.setHeader('Content-Type', 'application/json'); // handle globally?
      res.send(polls);
    })
    .catch(next); // TODO: Add Error Handler
};
