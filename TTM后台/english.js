const mongoose = require('mongoose');
const English = mongoose.model('English', {
    date:String,
    number:String,
    type:String,
    nation:String,
    qualifications:String,
    people:String,
    peopletype:String,
    sex:String,
    name:String,
    citys:String,
    provinces:String,
    site:String,
    state:String,
    file:String,
    comment:String
});
module.exports=English;