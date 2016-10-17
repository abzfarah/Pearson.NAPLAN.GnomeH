var Hapi = require('hapi'),
    Routesa = require('./routes/UserRoute'),
    Routesb = require('./routes/SchoolRoute'),
    config = require('./config'),
    Db = require('./database');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 3000
});

server.connection({ routes: { cors: true } })

server.route(Routesa.endpoints);
server.route(Routesb.endpoints);
server.start(function() {
    console.log('Server started ');
});
