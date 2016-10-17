var Hapi = require('hapi'),
    Routes = require('./routes/UserRoute'),
    config = require('./config'),
    Db = require('./database');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 3000
});

server.connection({ routes: { cors: true } })

server.route(Routes.endpoints);
server.start(function() {
    console.log('Server started ');
});