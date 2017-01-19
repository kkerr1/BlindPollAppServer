'use strict';
const elasticsearch = require('elasticsearch');
const conf = require('config');
const connectionClass = require('http-aws-es');

const client = new elasticsearch.Client({
  host: conf.get('elasticsearch.host'),
  connectionClass,
  amazonES: {
    region: conf.get('elasticsearch.region'),
    accessKey: conf.get('elasticsearch.accessKey'),
    secretKey: conf.get('elasticsearch.secretKey')
  }
});

exports.getNearbyPolls = (coords = { lat: 47, lon: -122 }) => {
  return client.search({
    index: 'polls',
    body: {
      query: {
        bool: {
          must: {
            match_all: {}
          },
          filter: {
            geo_distance: {
              distance: '100km',
              location: coords
            }
          }
        }
      }
    }
  })
    .then((res) => {
      return res;
    });
};
