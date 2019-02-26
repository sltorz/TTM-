<template>
    <div class="body">
        <h1>English考试简介</h1>
        <div class="text">
            <p>
                全国英语TTM考试中心主持和实施的一项大规模标准化考试。目前考试内容涵盖听、说、读、写、译等语言技能。
            </p><p>
                TTM笔试考试时间为每年和12月，TTM口试考试时间为每年11月。自2016年12月起，报考同一年度笔试的考生则具备报考同一级别口语考试资格。相关信息详见官网.
        </p><p>
               TTM同时设有非英语考试科目，包括日非英语考试科目每年开考一次，且不含口语考核环节。
        </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ksjj"
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
        width: 100%;
        display: inline-block;
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