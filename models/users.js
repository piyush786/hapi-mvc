var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new Schema({
 name : {type:String,required: true, trim: true},
 age : {type:Number, required:true, default: 10 }
})

module.exports = mongoose.model('User',UserSchema)
