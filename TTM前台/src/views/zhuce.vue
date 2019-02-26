<template>
    <div style="">
        <div class="wrap">
            <!-- start of 头部导航-->
            <div class="head_top">
                <div class="head clearfix">
                    <!--头部左边-->
                    <div class="topLeft left">
                        <a href="index.html" title="Darry Ring">
                            <!--<img width="186" height="42" src="../../../assets/images/logo_01.png"/>-->
                        </a>
                        <span style="font-size: 18px"><router-link to="/index/zhuce" style="text-decoration: none">注册</router-link> | <router-link to="/" style="text-decoration: none">首页</router-link></span>
                    <span><router-link to="/index/login" style="position: absolute;right: 10%; text-decoration: none;cursor: pointer">已有账号直接登录</router-link></span>
                    </div>

                </div>
            </div>
        </div>
       <div>
           <div class="zcbody">
               <div class="zcfrom">
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
                       <input type="text" class="form-control" name="name" v-model="name" required  @blur="namem" >
                   </div>
                   <label class=" control-label" v-if="namets" style="color: red">名字长度为2-6个中文字符</label>
               </div>
               <div class="form-group">
                   <label class=" control-label">电子邮箱</label>
                   <div >
                       <input type="text" class="form-control" name="name" v-model="email" required @blur="emailm">
                   </div>
                   <label class=" control-label" v-if="emailts" style="color: red"> 邮件格式不正确</label>
               </div>
               <div class="form-group">
                   <label class=" control-label">手机号</label>
                   <div >
                       <input type="text" class="form-control" name="name" v-model="phone" required @blur="phonem">
                   </div>
                   <label class=" control-label" v-if="phonets" style="color: red"> 号码格式不正确</label>
               </div>
               <div class="form-group">
                   <label class=" control-label">密码</label>
                   <div >
                       <input type="password" class="form-control" name="name" v-model="password" required @blur="passwordm">
                   </div>
                   <label class=" control-label" v-if="passwordts" style="color: red"> 密码格式有误</label>
               </div>
               <div class="form-group">
                   <label class=" control-label">密码确认</label>
                   <div >
                       <input type="password" class="form-control" name="name" v-model="qrpassword" required @blur="qrpasswordm" >
                   </div>
                   <label class=" control-label" v-if="qrpasswordts" style="color: red"> 两次密码不相同</label>
               </div>

                   <div >
                       <p>提示：1.邮箱和手机号均可作为您的登录账号</p>
                       <p style="text-indent: 40px">3.密码长度为6-8位字符，可同时包含：字母、数字和特殊字符!@#$%^&*_-</p>
                   </div>

           </form>
           <div class="form-group" style="margin-bottom: 50px;">
               <div class="col-sm-offset-2 col-sm-8">
                   <button  @click="submit"  class="btn  btn-success  btn-block" :disabled=!(city&&(!namets)&&type&&(!numberts)&&(!phonets)&&(!emailts)&&(!passwordts)&&(!qrpasswordts))>提交</button>
               </div>
           </div>
       </div>
       </div>
       </div>
     <mybottom></mybottom>
    </div>

</template>

<script>
    import  mybottom from "../components/public/bottom"
    export default {
        name: "zhuce",
        data:function(){
            return{
                phone:"",
                email:"",
                password:"",
                qrpassword:"",
                city:"",
                name:"",
                type:"",
                number:"",
                qrpasswordts:false,
                phonets:false,
                emailts:false,
                namets:false,
                numberts:false,
                passwordts:false,


            }
        },
        components:{
            mybottom
        },
        methods: {
            submit: function () {

                this.$http.post("zhuce", {
                    phone: this.phone,
                    email: this.email,
                    password: this.password,
                    city: this.city,
                    name: this.name,
                    type: this.type,
                    number: this.number
                }).then(result => {

                   // prompt("注册信息",result.bodyText)
                      confirm(result.bodyText);
                    //console.log(result.bodyText);
                    // let res = "";
                    // console.log(result.bodyText)
                    // for (let item in JSON.parse(result.bodyText)) {
                    //     console.log(item);
                    //     res += "<p class=" + "control-label" + ">" + item + " : " + JSON.parse(result.bodyText)[item] + "</p>";
                        // "<p>"+<JSON.parse( result.bodyText)[item]+"</p>";
                    // }
                    // this.cxjg = res;

                })


            },
            qrpasswordm:function() {

            if((this.password!=this.qrpassword)&&this.qrpassword ){
                this.qrpasswordts=true;
            }
            else{
                this.qrpasswordts=false;
            }
            },


            phonem:function(){
                if(this.phone.match(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/)||!this.phone){
                    this.phonets=false;
                }
                else{
                    this.phonets=true;
                }
            },
            emailm:function(){
                if(this.email.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)||!this.email){
                    this.emailts=false;
                }
                else{
                    this.emailts=true;
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
            numberm:function(){
                if(this.number.match(/^\d{18}|\d{18}/)||!this.number){
                    this.numberts=false;
                }
                else{
                    this.numberts=true;
                }
            },

        passwordm:function(){
            if(this.password.match(/^\w{6,15}/)||!this.password){
                this.passwordts=false;
            }
            else{
                this.passwordts=true;
            }
        }
    }
    }
</script>

<style scoped>

.wrap{width:100%;height:100%;background:#fff;z-index:99999}

 .zcbody{
     background: url("../assets/images/pexels-photo-403571.jpeg") no-repeat ;
     background-size: cover;

     margin: 0 auto;

  }
 .zcfrom{
     display: inline-block;
     background-color: rgba(255,255,255,.4);
     border-radius: 10px;
     padding-top:30px ;
     margin: 0 auto;
     margin-top: 50px;
     margin-bottom: 50px;
 }
    form{
        /*border :1px solid #ccc;*/
        margin: 0 auto;
        width :80%;
    }
.bc_yz {
    margin-top: 50px;
    overflow: hidden;
}
    label{text-indent: 8px;}
    @import  '../assets/bootstrap/css/bootstrap.css';
</style>