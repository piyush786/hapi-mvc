module.exports = [{
  path:'/public/css/{file}',
  method:'GET',
  handler:function(request,resonse)
  {
    file = request.params.file
    resonse.file(__dirname+'/assets/css/'+file)
  }
},
{
  path:'/public/js/{file}',
  method:'GET',
  handler:function(request,resonse)
  {
    file = request.params.file
    resonse.file(__dirname+'/assets/js/'+file)
  }
},
{
  path:'/public/images/{file}',
  method:'GET',
  handler:function(request,resonse)
  {
    file = request.params.file
    resonse.file(__dirname+'/assets/images/'+file)
  }
},
{
  path:'/public/fonts/{file}',
  method:'GET',
  handler:function(request,resonse)
  {
    file = request.params.file
    resonse.file(__dirname+'/assets/fonts/'+file)
  }
},
{
  path:'/public/views/{file}',
  method:'GET',
  handler:function(request,resonse)
  {
    file = request.params.file
    resonse.file(__dirname+'/views/'+file)
  }
}]
