module.exports = {
  register : function(server,option,next){
    next()
    }
}
module.exports.register.attributes = {
  'name':'logger',
  'version':'1.0.0'

}
