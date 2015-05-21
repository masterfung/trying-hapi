"use-strict";

var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
  port: 3000,
  host: 'localhost',
  labels: ['web']
});

server.route({
  method: 'GET',
  path: '/',
  handler: function(req, res) {
    res('Hello World')
  }
});

server.start(function(err) {
  if (err) {
    console.log("Something went wrong: "+ err);
  }
  console.log('Hapi Server is running on port 3000!');
});
