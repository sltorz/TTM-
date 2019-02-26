<template>
  <div id="app">
    <div class="section" v-if="$route.meta.show">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">English</a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <!-- <li ><a href="#">Link </a></li> -->
              <li class="active"><router-link to="/index">首页<span class="sr-only">(current)</span></router-link></li>
              <li  ><router-link to="/ksjj">考试简介</router-link></li>
              <li  ><router-link to="/ksxz" class="data">考生须知</router-link></li>
              <li  ><router-link to="/kssj" class="data">考试时间</router-link></li>
              <li  ><router-link to="/bmlc" class="data">报名流程</router-link></li>
              <li  ><router-link to="/cjwt" >常见问题</router-link></li>
              <li  ><router-link to="/tbts">特别提示</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-view />
    <div class="section" v-if="$route.meta.show">
      <div class="indexbottom">
        <p>COPYRIGHT 中华人民共和国教育部考试中心 All RIGHTS RESERVED</p>
        <p>京ICP备05031027号 (Powered by :0120019)</p>
        <p>建议浏览器：火狐浏览器、谷歌浏览器、IE9+、360浏览器（选择极速模式）</p>
      </div>
    </div>
  </div>
</template>
<script>
  import "./assets/jquery-3.1.1.min";
  import "./assets/bootstrap/js/bootstrap.min.js";

  export default{





  }
</script>
<style lang="less">
  @import  './assets/bootstrap/css/bootstrap.css';
  .navbar-default a,.navbar-default a:hover{
    text-align: center;

  }

  .navbar-default .navbar-nav>.active>a:hover{
    background-color:#e7e7e7;

  }
  .navbar-default{
    border-radius: 0px;

  }
  .navbar{
    margin-bottom: 0px !important;
  }
  .indexbottom{
    margin-top: 10px;
    text-align: center

  }
</style>
