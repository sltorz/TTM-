<template>
    <div style="overflow-x: hidden">
        <div class="wrap">
            <!-- start of 头部导航-->
            <div class="head_top">
                <div class="head clearfix">
                    <!--头部左边-->
                    <div class="topLeft left">
                        <a href="index.html" title="Darry Ring">
                            <!--<img width="186" height="42" src="../../../assets/images/logo_01.png"/>-->
                        </a>
                        <span style="font-size: 18px"><router-link to="" style="text-decoration: none">登录</router-link> | <router-link to="/" style="text-decoration: none">首页</router-link></span>
                        <span><router-link to="/index/zhuce" style="position: absolute;right: 10%; text-decoration: none;cursor: pointer">没有账号前去注册</router-link></span>

                </div>

                </div>
            </div>
        </div>
        <div class="containers">
            <!--中间内容-->
            <div class="cmain ddd">
                <!--内容右边-->
                <div class="cort-right right  ">
                    <div class="r_bg"></div>
                    <!--登陆框内-->
                    <form method="post" action="login.html" id="loginform">
                        <div class="cr_border ">
                            <h3></h3>
                            <!--邮箱-->
                            <div id="cssName" class="the_input ">
                                <span class="member"></span>
                                <input type="text" placeholder="请输入邮箱/手机号码" id="txtName" class="al_Input dr_email" value="" name="data[email]" v-model="email_phone"/>
                                <i id="tname"></i>
                            </div>
                            <!--邮箱end-->
                            <!--密码-->
                            <div style="margin-top:15px;" class="the_input" id="cssPwd">
                                <span class="password"></span>
                                <input type="password" placeholder="请输入密码" id="txtPwd" class="al_Input" value="" name="data[password]"  v-model="password"/>
                                <i id="pwdd"></i>
                            </div>
                            <!--验证码-->
                            <!--验证码end-->
                            <!--报错信息-->
                            <div class="ts_wrong" id="showWrong" style="display: none">
                                <span id="wrong"> <span id="Label1">Label</span></span>
                            </div>
                            <!--报错信息end-->
                            <!--其他选项-->

                            <div class="radio radio-inline" >
                                <label>
                                    <input type="radio" name="optionsRadios" id="optionsRadios1" v-model="radio"  value="1" checked>
                                    用户登录
                                </label>
                            </div>
                            <div class="radio radio-inline">
                                <label>
                                    <input type="radio" name="optionsRadios" id="optionsRadios2" v-model="radio" value="2">
                                   管理员登录
                                </label>
                            </div>

                            <div class="other_input">
                                <div class="left">
                                    <input type="checkbox" name="remember" id="check" value="1" />
                                    <label for="check">记住密码</label>
                                </div>
                                <div class="right">
                                    <router-link to="/index/zhzh" class="forget">忘记密码</router-link>
                                </div>
                            </div>
                            <!--其他选项end-->
                            <!--按钮-->
                            <div class="other_input">
                                <div class="bt1 clearfix" id="login">
                                    <router-link to="/index/zhuce"><span class="left">注册</span></router-link>
                                   <router-link to=""><span class="right focus" @click="logins">登录</span></router-link>
                                </div>
                            </div>
                            <!--按钮end-->
                            <!--其他合作-->
                            <div class="other_hz">
                                <p> <span>更多合作网站帐号登录:</span> <a href="/syncLogin/qq" class="oth_qq" target="black"></a> <a href="/syncLogin/weibo" class="oth_wb" target="black"></a> <a href="/syncLogin/weixin" class="oth_wx" target="black"></a> </p>
                            </div>
                            <!--其他合作end-->
                        </div>
                        <input type="hidden" value="index.html" name="forward" />
                    </form>
                    <!--登陆框内end-->
                </div>
                <!--内容右边end-->
            </div>
            <!--中间内容end-->
        </div>
        <mybottom></mybottom>
    </div>
</template>

<script>
    import "../assets/jquery-3.1.1.min.js";
    import  mybottom from "../components/public/bottom"
    export default {
    data:function(){
      return{
          email_phone:"",
          password:"",
          data:{},
          radio:""
      }
},
        components:{
        mybottom
        },
        methods: {


            logins:function() {
                console.log(this.radio);
                if (this.radio=='1') {
                    $('.ts_wrong').remove();
                    $('.the_input').removeClass('error');
                    if (this.email_phone == '') {

                        var notice = '<div class="ts_wrong"><span id="wrong" style=" background: url(../assets/images/bc.png) no-repeat left center;display: inline-block;color: #ff4040;font-size: 12px;padding-left: 24px;margin-left: 10px">请输入邮箱/手机号码！</span></div>';
                        $('#txtName').parent().after(notice);
                        $('#txtName').parent().addClass('error');
                        return false;
                    }
                    if (this.email_phone.match(/\d{1,11}/)) {
                        if (!this.email_phone.match(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/)) {

                            var notice = '<div class="ts_wrong"><span id="wrong" style=" background: url(../assets/images/bc.png) no-repeat left center;display: inline-block;color: #ff4040;font-size: 12px;padding-left: 24px;margin-left: 10px">手机号码格式不正确！</span></div>';
                            $('#txtName').parent().after(notice);
                            $('#txtName').parent().addClass('error');
                            return false;
                        }
                    } else {
                        if (!this.email_phone.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
                            var notices = '<div class="ts_wrong"><span id="wrong" style=" background: url(../assets/images/bc.png) no-repeat left center;display: inline-block;color: #ff4040;font-size: 12px;padding-left: 24px;margin-left: 10px">邮箱格式不正确！</span></div>';
                            $('#txtName').parent().after(notices);
                            $('#txtName').parent().addClass('error');
                            return false;
                        }
                    }
                    if (this.password == '') {
                        console.log(this.password);
                        var notices = '<div class="ts_wrong"><span id="wrong" style=" background: url(../assets/images/bc.png) no-repeat left center;display: inline-block;color: #ff4040;font-size: 12px;padding-left: 24px;margin-left: 10px">请输入密码！</span></div>';
                        $('#txtPwd').parent().after(notices);
                        $('#txtPwd').parent().addClass('error');
                        return false;
                    }

                    if (this.email_phone.match(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/)) {
                        this.data = {
                            phone: this.email_phone,
                            password: this.password
                        }
                    } else {
                        this.data = {
                            email: this.email_phone,
                            password: this.password
                        }
                    }
                    this.$http.post("login", this.data).then(result => {
                        if (JSON.parse(result.bodyText).name) {

                            localStorage.setItem('name', JSON.parse(result.bodyText).name);
                            localStorage.setItem('number', JSON.parse(result.bodyText).number);

                            this.$router.push({path: '/index/student'});

                        } else
                            alert(JSON.parse(result.bodyText).提示)

                    })

                }
                else if(this.radio=='2'&&this.email_phone=="slt"&&password=="123"){

                    var administrator={name:this.email_phone,password: this.password};
                    this.$http.post("administrator", administrator).then(result => {

                    if(result.body.code=="1"){
                        this.$router.push({path: '/index/list'});
                    }
                    else
                        alert("管理员账号或密码错误！")
                    })

                }
				else{}
            }
        }
    }
</script>

<style scoped>
    @import "../assets/css/style.css";
    *{
        box-sizing: content-box;
    }
</style>