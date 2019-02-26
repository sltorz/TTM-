
const mongoose = require('mongoose');
const People = mongoose.model('People', {
    name: String ,
    type:String,
    number:String,
    city:String,
    email:String,
    phone:String,
    password:String
});
const s1 = new People({
    name: "沈连婷" ,
    type:"1",
    number:"341181199705141422",
    city:"34",
    email:"1113112184@qq.com" ,
    phone:"18815616750",
    password:"123"
});
// s1.save().then(() => console.log('保存完毕'));;
module.exports= People;