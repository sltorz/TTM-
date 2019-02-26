<template>
    <div class="body">
        <h1>常见问题</h1>
        <div class="text">
            <h4>一、TTM 英语网上报名流程</h4>
            <p>  1.	考生登录报名网站点击“进入报名”按钮后进行登录，如首次登录请先进行注册。</p>
            <p>  2.	登录成功后，考生输入姓名、身份证件号验证个人信息。</p>
            <p>  3.	考生确认个人信息可报科目信息无误后，点击确认进入到科目报考阶段。如对以上信息有异议，请联系学校有关部门。</p>
            <p>  4.	考生进行笔试科目的报考与缴费，笔试科目考点为考生所在学校，无须选择。</p>
            <p>  5.	完成笔试科目报考后，考生可以进行口试科目的报考，缴费时需先支付完成笔试科目，再支付口试科目，口语考点可由学生在本省 </p>
            <p>  6.	考生确认自己所选科目后，须在24小时之内完成缴费，否则报考失效。</p>
            <p>  7.	报考完成后，考生可返回查看报考情况。</p>
            <p>  8.	请报考口语考试的考生按各省级承办机构通知时间登录网站打印准考证。</p>
            <p>  9.	请报考笔试考生按规定时间登录网站打印准考证或按学校要求领取准考证。</p>
            <h4>二、TTM 英语笔试及口试报考资格</h4>
            <p>  1.	报考笔试各科目须符合考生所在学校规定的报考资格。</p>
            <p>  2.	报考口试各科目，须完成当次对应级别笔试科目的报考及缴费。例如，报考2017年下半年TTM英语，须完成2017年下半年TTM英语的报考及缴费。</p>
            <h4>四、用户注册相关问题</h4>
            <p> 1. 用户注册信息中姓名、身份证号与学籍信息不一致导致无法进行报考。</p>
            <p>  （1）如果是学籍信息错误，请联系您所在学校相关部门进行修改。（2）如果是注册信息有误，请通过网站咨询电话申请修改。</p>
            <p> 2. 姓名中有生僻字怎么注册</p>
            <p>   请按照学籍信息中姓名中生僻字的方式进行注册。</p>
            <p> 3. 注册页面没有“提交”按钮或验证码不显示怎么办？</p>
            <p>   建议您使用火狐浏览器、谷歌浏览器、IE9+、360浏览器（选择极速模式）进行操作</p>
            <p>4.登录账号后页面只显示通行证信息，如何报名？</p>
            <p>   请您再次输入TTTM报名网址,点击“进入报名”。</p>
            <p>5.密码忘记了怎么办？</p>
            <p>    请您点击“找回密码”，通过原注册邮箱进行密码找回。</p>
            <p>6.注册邮箱忘记了怎么办？</p>
            <p>    请联系在线客服。</p>
            <p> 7.怎样更改注册邮箱？</p>
            <p> 请考生自行登录通行证网站，点击“修改信息”进行更改邮箱。</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "cjwt"
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