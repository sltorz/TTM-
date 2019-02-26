var express = require('express');
var app = express();


var formidable = require('formidable'),
    http = require('http'),
    util = require('util');
app.all('/*',(req,res,next)=>{
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods","*");
	res.setHeader('Content-Type','application/json;charset=utf-8');
	next();
});
app.use(express.static("./uploads"));
var path=require("path");
var fs=require("fs");
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/people',{useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("连接已经建立")
});
var people=require("./data.js");
var city=require("./city.js");
var english=require("./english.js");
app.post('/zhuce',function(req ,res){
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
		console.log(fields);
		const data = new people({
			name: fields.name ,
			type:fields.type,
			number:fields.number,
			city:fields.city,
			email:fields.email ,
			phone:fields.phone,
			password:fields.password
		});
		people.find({$or:[{email:fields.email },{phone:fields.phone }]},function(err,arr) {
			if (err) return handleError(err);
			if (arr.length !=0) {
				res.send("该邮箱或手机号已注册，可直接找回密码进行登录！");

			}
			else{
				data.save().then(() => console.log('保存完毕'));
				res.send("注册成功");
			}
		});

	})
});
app.post('/form',function(req ,res){
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
		console.log(fields);
		people.find(fields,function(err,arr) {
			if (err) return handleError(err);
			if(arr .length==0 ){
			res.send({提示:"没有查询到相关信息，   请检查信息是否填写错误！"});

			}
			else {
				res.send({email: arr[0].email, phone: arr[0].phone, password: arr[0].password});
			}
				});



    });

});
app.post('/administrator',function(req ,res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
if(fields.name=="slt"&&fields.password=="123");
res.json({code:1});

	})
});
app.post('/login',function(req ,res){
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
		console.log(fields);
		var data;
		if(fields.phone){
			data={phone:fields.phone}
		}
		else{
			data={phone:fields.phone}
		}
		people.find(data,function(err,arr) {
			console.log(arr);
			if (err) return handleError(err);
			if(arr .length==0 ){
				res.send({提示:"该账号没有注册！"});

			}
			else if(fields.password==arr[0].password){
				console.log(arr[0].number);
				res.send({name: arr[0].name,number: arr[0].number});
			}
			else{
				res.send({提示:"密码错误！"});
			}

		});



	});

});

// english.remove( {name:"沈连婷"}, function (err) {
// 			if (err) return handleError(err);
// 			console.log("删除成功")
//          });
app.get('/province',function(req ,res){

	city.find( req.query,function(err,arr) {
		console.log(arr);
		res.send(arr);
	})


	});
app.get('/city',function(req ,res){
	console.log(req.query);
	city.find(req.query,function(err,arr) {
		console.log(arr);
		res.send(arr);
	})
});
let filename="";
app.post('/file',function(req ,res) {
	var form = new formidable.IncomingForm();
	form.uploadDir = './uploads';

	form.parse(req, function (err, fields, files) {
		// let ttt = sd.format(new Date(), 'YYYYMMDDHHmmss');
		let ran = parseInt(Math.random() * 89999 + 10000);
		let extname = path.extname(files.file.name);
		let oldpath='./'+files.file.path.replace('\\', '/')
		   newpath ='./uploads/' + ran + extname;
		    filename=ran + extname;
		fs.rename(oldpath, newpath,function(err){
			if(err){
				throw Error("改名失败");
			}
			res.send("true");

	})
	})
});

app.post('/signup',function(req ,res){
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
		console.log(filename);
		const data = new english({
			file:filename,
			number:fields.number,
			type:fields.type,
			nation:fields.nation ,
			qualifications:fields.qualifications ,
			people:fields.people ,
			peopletype:fields.peopletype,
			sex:fields.sex,
			name:fields.name,
			citys:fields.citys,
			provinces:fields.provinces,
			site:fields.site,
			state:"待审核",
			comment:"",
		});
console.log(data);
		english.find({number:fields.number },function(err,arr) {
			if (err) return handleError(err);
			if (arr.length !=0) {
				res.send({提示:"该证件号已报名，无需重复名！"});

			}
			else{
				data.save().then(() => console.log('保存完毕'));
				res.send({提示:"您已报名成功，请等待审核！"});
			}
		});

		 // data.save().then(() => console.log('保存完毕'));

	})
});
app.get('/state',function(req ,res){
	console.log(req.query);
	english.find(req.query,function(err,arr) {
		if(arr.length==0){
			res.send({msg:"未报名"});
		}
		else{
			res.send({msg:"已报名"});
		};

	})
});
app.get('/detail',function(req ,res){
	english.find(req.query,function(err,arr) {
		res.send(arr);
	})
});
app.post('/auditing',function(req ,res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {

		english.update({number: fields.number}, {
			$set: {
				state: fields.state,
				comment: fields.comment
			}
		}, function (err, arr) {
			res.send("提交成功！")
		})
	})
})
		app.post('/update',function(req ,res){
			var form = new formidable.IncomingForm();
			form.parse(req, function(err, fields, files) {
				const data = {
					file:filename,
					number:fields.number,
					type:fields.type,
					nation:fields.nation ,
					qualifications:fields.qualifications ,
					people:fields.people ,
					peopletype:fields.peopletype,
					sex:fields.sex,
					name:fields.name,
					citys:fields.citys,
					provinces:fields.provinces,
					site:fields.site,
					state:"待审核",
					comment:"",
				};
				english.update({number: fields.number}, {$set: data}, function (err, arr) {
					res.send({提示:"修改成功！"})
				})


			})


	});



app.listen(3000);
console.log("服务器启动成功");