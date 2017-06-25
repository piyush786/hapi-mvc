var home  = require(__dirname+'/controllers/home.js')
var homeName  = require(__dirname+'/controllers/home-name.js')

module.exports =
[
  { path:'/', method:'GET', handler: home },
  { path:'/{name}', method:'GET',handler:homeName },
]
