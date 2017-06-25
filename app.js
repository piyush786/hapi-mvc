var Hapi = require('hapi')
var routes = require('./routes')
var staticRoutes = require('./static-routes')
var database = require('./config/database');
var config = require('./config/config')
var server = new Hapi.Server()

//server spawn
server.connection({
  'host':config.server.host,
  'port':process.env.PORT || config.server.port
})


//Environment Configuration
server.ext('onPreHandler',function(request,response){
  request.env = config
  response.continue()
})

// static files serving
server.register(require('inert'),server.route(staticRoutes))

//plugin For Routes
server.register( [
  require('./plugins/log'),
],server.route(routes))

//Server Start
server.start(function(err){
  if(err) { throw err ;}
  console.log("server started with url "+server.info.uri)
})
