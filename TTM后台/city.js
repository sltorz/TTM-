const mongoose = require('mongoose');
const City = mongoose.model('City', {
    province:String,
    city:String ,
    site:Array
});
const c1 = new City({
    province:"安徽省",
    city:"合肥市",
    site:["合肥工业大学","合肥学院","安徽大学","安徽农业大学"]
});
const c2 = new City({
    province:"安徽省",
    city:"芜湖市",
    site:["安徽师范大学","安徽工程大学","皖南医学院"]
});
const c3 = new City({
    province:"安徽省",
    city:"淮南市",
    site:["安徽理工大学","淮南师范学院","淮南联合大学"]
});
const c4 = new City({
    province:"安徽省",
    city:"滁州市",
    site:["滁州学院","安徽科技学院","滁州职业技术学院","滁州城市职业学院"]
});
const s1= new City({
    province:"江苏省",
    city:"南京市",
    site:["南京大学","南京农业大学","河南大学","南京审计学院"]
});
const s2= new City({
    province:"江苏省",
    city:"无锡市",
    site:["江南大学"]
});
const s3= new City({
    province:"江苏省",
    city:"徐州市",
    site:["中国矿业大学","江苏师范大学"]
});
const s4= new City({
    province:"江苏省",
    city:"扬州市",
    site:["扬州大学","扬州大学广陵学院"]
});
const s5= new City({
    province:"江苏省",
    city:"苏州市",
    site:["苏州大学","苏州科技大学","苏州大学文字学院"]
});

//c1.save().then(() => console.log('保存完毕'));
    // c2.save().then(() => console.log('保存完毕'));;
   //
   //  c3.save().then(() => console.log('保存完毕'));;
   //
  //  c4.save().then(() => console.log('保存完毕'));;
   //
    




   //  s1.save().then(() => console.log('保存完毕'));
    // s2.save().then(() => console.log('保存完毕'));;
   //
   //  s3.save().then(() => console.log('保存完毕'));;
   //
  //  s4.save().then(() => console.log('保存完毕'));;
   //
    // s5.save().then(() => console.log('保存完毕'));;
module.exports=City;