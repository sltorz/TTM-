<template>
    <div class="body">
        <h1>报名流程</h1>
        <div class="text">
            <a href="#">点击查看全国TTM英语考试报名流程</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bmjc"
    }
</script>

<style scoped>
    .body{
        width: 100%;
        max-width: 1200px;
        padding: 20px 40px 40px 40px;
        margin: 0px auto;
        line-height: 30px;
        font-size: 16px;
        text-indent: 30px;
    }
    .body h1{
        width: 100%;
        max-width: 900px;
        margin: 0px auto;
        text-align: center;
        border-bottom:2px solid gray;

        padding-bottom: 20px;
    }
    .body  .text{

        margin-top:20px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 30px;
    }
    .body .text a{
        text-align: center;
        width: 100%;
        display:block;
        text-align: center;
    }
    @media screen and (max-width: 768px) {
        .body{
            line-height: 25px;
            font-size: 14px;
        }
        .body h1 {
            font-size: 28px;
        }
    }
</style>