"use-strict";

var Hapi = require('hapi');
var engine = require('hapi-react')();
var Path = require('path');

var server = new Hapi.Server();

const viewPaths = Path.join(__dirname, "views");
var options = {beautify: true};

server.connection({
  port: 3000,
  host: 'localhost',
  labels: ['web']
});

server.views({
  defaultExtension: 'jsx',
  engines: {
    html: engine,
    jsx: require('hapi-react')(options),
    js: engine
  },
  path: viewPaths + '/components'
});

// server.views({
//   defaultExtension: 'html',
//   engines: {
//     jsx: require('hapi-react')(options),
//     js: engine
//   },
//   relativeTo: __dirname,
//   path: './views',
//   partialsPath: './views/partials'
// });

server.route({
  method: 'GET',
  path: '/',
  handler: function(req, res) {
    res.view('index', {
      name: "Johnny"
    })
  }
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function(req, res) {
    res('Hello' + encodeURIComponent(req.params.name) + '!')
  }
});

server.start(function(err) {
  if (err) {
    console.log("Something went wrong: "+ err);
  }
  console.log('Hapi Server is running on port 3000!');
});
