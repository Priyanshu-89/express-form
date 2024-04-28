const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/test")

const userSchmea=mongoose.Schema({
    user:String,
    email:String,
    image:String
})

module.exports=mongoose.model('user', userSchmea);