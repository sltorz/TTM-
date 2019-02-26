<template>
    <div>
        <div class="section ">

            <div class="bgimg">
                <div class="text">
                    <p > TTM</p>
                    <p>考试报名指南</p>
                </div>

            </div>
        </div>
        <div class="section">
            <div class="bgbimg">

                <img src="../assets/images/bz1.png" alt="">
            </div>
        </div>
        <div class="section">
            <div class="container bannerLeft">
                <div class="row">
                    <div class="col-md-4 col-xs-6">
                        <ul>
                            <router-link to="/index/login"><li><div><i class="iconfont iconhuadian-daxingzhiwu"></i></div><div><p>进入报名</p><p>ENTRY</p></div></li></router-link>
                            <router-link to="/index/zhuce"><li><div><i class="iconfont iconzhiwu"></i></div><div><p>注册新用户</p><p>REGISTER NEW USER</p></div></li></router-link>
                            <router-link to="/index/zhzh"><li><div><i class="iconfont iconziyuan2"></i></div><div><p>找回已报名账号</p><p>REGISTER ACCOUNT</p></div></li></router-link>
                            <a><li><div><i class="iconfont iconziyuan1"></i></div><div><p>补办成绩证明</p><p>TRANSCRIPT COPY RE-ORDER</p></div></li></a>
                            <a><li><div><i class="iconfont iconziyuan"></i></div><div><p>快速打印准考证</p><p>PRINT TICKET</p></div></li></a>

                        </ul>
                    </div>
                    <div class="col-md-4 hidden-sm hidden-xs "><img width="100%" style="margin-top:5px" src="../assets/images/pexels-photo-970089.jpeg" alt=""></div>
                    <div class="col-md-4 col-xs-6 indexRight">
                        <div>
                            <h4>英语考试最新动态</h4>
                            <div>
                                <p>2018年下半年考试时间：</p>
                                <p>笔试 ：2018-12-15</p>
                                <p>时间 ：9:00-12:00</p>
                                <p>口试 ：2018-12-15</p>
                                <p>时间 ：9:00-11:00 </p>
                            </div>
                            <div>
                                <p>TTM英语考试提示:</p>
                                <p>1 : 2018年考试报名仅限北京、天津、河北、吉林、上海、安徽、河南、湖北、山东、福建、广东、广西、海南、重庆、四川、云南、甘肃、青海、澳门</p>
                                <p>2 ：报名未开始前，参赛者可进行注册操作，具体考试时间以通知为准。</p>
                                <p>3 ：预计9月17日9:30，9月18日9:30，9月19日11:30，9月26日13:00及14:30,9月27日10:00为报名高峰时段，请各位参赛者结合自身情况，选择错峰报名，如遇网络拥堵，请稍后再试。</p>
                                <p>4 ：已完成英语考试科目报名及缴费后，由于口语考位已满或暂未开放，可能会造成暂时无法报考对应口语科目，请随时再次登录系统进行查看。</p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>

                </div>
            </div>


        </div>
        <server></server>
        </div>
</template>

<script>
    import server from '../components/public/server';
    import "../assets/jquery-3.1.1.min";
    import "../assets/bootstrap/js/bootstrap.min.js";
    export default {
        components:{
            server,
        },
    }
</script>

<style scoped>
    @import  '../assets/bootstrap/css/bootstrap.css';
   @import "http://at.alicdn.com/t/font_1056892_p2bxw4lt9lr.css";
    .bgimg {
        width:100% ;
        border-top: 1px solid #ccc;
        position: relative;
        height:500px;
        background-image: url("../assets/images/pexels-photo-886521.jpeg");
        background-size: cover;
        background-position: center;

    }
    @media screen and (max-width: 768px) {
        .bgimg  {
            height:300px;
        }
    }
    .bgbimg{

        background-color:#3F8E5E;
    }
    .bgbimg img{

        position: relative;;
        left: 50%;
        transform:translateX(-50%) ;
    }

    @media screen and (max-width: 943px) {
        .bgbimg img {
            width: 100%;
        }
    }
    .bgimg .text{
        font-size: 50px;
        position: absolute;
        right:15%;
        top:50%;
        transform: translateY(-50%);
        text-align: center
    }

    @media screen and (max-width: 768px) {
        .bgimg .text {
            font-size: 32px;
            right:1%;
        }
    }
    .section .container{
        overflow: hidden;
        width:100%;
        max-width: 1100px;
        margin: 20px auto;

        padding: 0px 0px 40px 0px;

        border-bottom: 1px solid#3F8E5E ;
    }
    .bannerLeft ul{
        padding: 0px;
    }
    .bannerLeft ul a{
        text-decoration: none;
    }
    .bannerLeft ul li{
        padding: 0px 15px;
        display: flex;
        background-color: #eaeaea;
        border-radius: 7px;
        margin: 5px 0px;


    }
    .bannerLeft ul  li div:first-child{
        flex:1;
    }
    .bannerLeft ul  li div:nth-child(2){
        display:flex;
        flex-direction: column;
        flex:4;
    }
    .bannerLeft ul  li div:nth-child(2) P:first-child{
        flex:2;
        font-size: 20px;
    }
    .bannerLeft ul  li div:nth-child(2) P:nth-child(2){
        flex:1;
    }
    .indexRight h4{
        font-weight: 600;
    }
    i{
        font-size: 36px;

    }
</style>