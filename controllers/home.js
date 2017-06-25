var User = require("../models/users")
module.exports = function(request,response)
{
    const env = request.env
    response.file(env.basepath+'/views/index.html')
}
