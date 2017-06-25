module.exports = function(request,resonse)
{
  const env  = request.env
  resonse.file(env.basepath+'/views/index.html')
}
