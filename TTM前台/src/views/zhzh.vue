<template>
    <div>
    <div class="head clearfix">
        <!--头部左边-->
        <div class="topLeft left">
            <a href="index.html" >

            </a>
            <span style="font-size: 18px"><router-link to="/index/zhzh" style="text-decoration: none">账号找回</router-link> | <router-link to="/" style="text-decoration: none">首页</router-link></span>

        </div>

    </div>
    <div class="body">
        <div class="text">
            <form >
                <div class="form-group">
                    <label class=" control-label">省份</label>
                    <div >
                    <select class="form-control " name="city" v-model="city">
                        <option value="">- 请选择 -</option>
                        <option value="11">北京市</option>
                        <option value="12">天津市</option>
                        <option value="13">河北省</option>
                        <option value="22">吉林省</option>
                        <option value="31">上海市</option>
                        <option value="34">安徽省</option>
                        <option value="35">福建省</option>
                        <option value="37">山东省</option>
                        <option value="41">河南省</option>
                        <option value="42">湖北省</option>
                        <option value="44">广东省</option>
                        <option value="45">广西壮族自治区</option>
                        <option value="46">海南省</option>
                        <option value="50">重庆市</option>
                        <option value="51">四川省</option>
                        <option value="53">云南省</option>
                        <option value="62">甘肃省</option>
                        <option value="63">青海省</option>
                        <option value="82">澳门</option>

                    </select>
                    </div>
                </div>
                <div class="form-group">
                    <label  class=" control-label">证件类型</label>
                    <div >
                        <select class="form-control "  name="type" v-model="type">
                       <option value="">- 请选择 -</option>
                            <option value="1">中华人民共和国居民身份证</option>


                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label">证件号码</label>
                    <div >
                        <input type="text" class="form-control" name ="number"  v-model="number" required @blur="numberm">
                    </div>
                    <label class=" control-label" v-if="numberts" style="color: red"> 身份证号码填写有误</label>
                </div>
                <div class="form-group">
                    <label class=" control-label">用户名</label>
                    <div >
                        <input type="text" class="form-control" name="name" v-model="name" required @blur="namem">
                    </div>
                    <label class=" control-label" v-if="namets" style="color: red">名字长度为2-6个中文字符</label>
                </div>
                <div class="form-group">
                    <label class=" control-label">验证号码</label>
                    <div  >
                        <!--<img src="../assets/images/VerifyCodeImg1.PNG">-->
                         <div  style="width: 50%;"><input id="txtVerificationCode" name="verificationCode" type="text" class="form-control" maxlength="4" autocomplete="off" /></div>
                         <!--<div style="width: 50%;"> <img id="vcodeImg" alt="点击刷新" title="看不清？点击刷新" style="cursor:pointer;color:grey;" @click="refreshImg"  src="../assets/images/VerifyCodeImg1.PNG"/></div>-->
                    </div>
                </div>
                <div class="form-group" style="margin-top: 30px;">
                    <div >
                        <div @click="submit"  class="btn  btn-success  btn-block" :disabled=!(city&&(!namets)&&type&&(!numberts))>查询</div>
                    </div>
                </div>

            </form>

        </div>

        <div class="tanW" v-if="cxjg">
           <div class="tanN">
               <p  class="x" @click="show">X</p>
               <h2>查询结果</h2>
               <div v-html="cxjg"></div>
           </div>
        </div>

    </div>
        <mybottom></mybottom>
    </div>
</template>

<script>
    import "../assets/jquery-3.1.1.min.js";
    import  mybottom from "../components/public/bottom"

    export default {
        data: function(){
            return {
                city: "",
                type: "",
                number: "",
                name: "",
                cxjg:"",
                numberts:false,
                namets:false,

            }
        },
        components:{
          mybottom
        },
        methods: {
            refreshImg: function () {

                $("#vcodeImg").attr("src", "../assets/images/VerifyCodeImg" + parseInt(Math.random()*10)+".jpg");

            }
            ,
            show:function(){
              this.cxjg=''
            },
            submit: function () {

                this.$http.post("form" ,{
                    city:this.city,
                    name:this.name,
                    type:this.type,
                    number:this.number
                }).then(result => {
                   let res="";

                   for(let item in JSON.parse( result.bodyText)){

                       res+= "<p class="+"control-label"+">"+item+" : "+JSON.parse( result.bodyText)[item]+"</p>";

                   }
                 this.cxjg=res;

                });

            },
            numberm:function(){
                if(this.number.match(/^\d{18}|\d{18}/)||!this.number){
                    this.numberts=false;
                }
                else{
                    this.numberts=true;
                }
            },
            namem:function(){

                if(this.name.match(/^[\u4e00-\u9fa5]{2,6}$/)||!this.name){
                    this.namets=false;
                }
                else{
                    this.namets=true;
                }
            },
        }

    }

</script>

<style scoped>
    .tanW{
        position:fixed ;
        top:0;
        bottom: 0;
        left: 0;
        right:0;
        background-color:rgba(0,0,0,0.9);

    }
    .tanN{

        background-image:url("../assets/images/gift-made-surprise-loop-45238.jpeg");
        background-size: cover;
        border-radius: 3px;
        position: absolute;
        width: 500px;
        height:300px;
        background-color: white;
        top:50%;
        left: 50%;
        transform: translatey(-50% ) translateX(-50%);
        padding:5px 5px;
    }
    .tanN  .x{
        width:20px;
        height:20px;
        line-height: 20px;
        float: right;
        font-size: 18px;
        text-indent: 4px;
        color: black;
        cursor: pointer;
    }
    .tanN div{
        padding:20px 120px;
        font-size: 18px;
    }
    form{
       /*border :1px solid #ccc;*/
        margin:30px auto 0px;
        width :60%;
    }
    @import  '../assets/bootstrap/css/bootstrap.css';
    .body{
        width: 100%;
        /*max-width: 1200px;*/
        padding: 20px 40px 40px 40px;
        margin: 0px auto;
        line-height: 30px;
        font-size: 16px;
        text-indent: 10px;
        background-image: url("../assets/images/branch-color-green-1353939.jpg");
        background-size: cover;
        border-top: 2px solid #ccc;
    }
    .body h1{
        width: 100%;
        max-width: 900px;
        margin: 0px auto;
        text-align: center;


        padding-bottom: 20px;
    }
    .body  .text{

        margin-top:20px;

        padding-bottom: 30px;
    }
    @media screen and (max-width: 768px) {
        .body{
            line-height: 25px;
            font-size: 14px;
        }
        .body h1 {
            font-size: 28px;
        }
        form{
            width: 80%;
        }
    }
</style>