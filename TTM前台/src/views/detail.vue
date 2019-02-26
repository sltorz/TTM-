<template>
    <div>
        <myhead :state="state"></myhead>
        <div class="body" >
        <table class="ufo_table_02" width="98%" border="0" cellspacing="0" cellpadding="0" style="margin:0 3px;;">
            <tr>
                <td width="40%">
                    <img class="zp" style="height: 160px; width: 120px; float:right; " id="imgPhotoShow" :src="'http://39.105.102.76:3000/'+file"/>
                </td >
                <td width="48%">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <tr style="height: 30px;">
                            <td class="lz_td1" align="right"><span>姓　　名：</span></td>
                            <td class="lz_td2"><span>{{name}}</span></td>
                        </tr>
                        <tr style="height: 30px;">
                            <td class="lz_td1" align="right"><span>性　　别：</span></td>
                            <td class="lz_td2"><span>{{sex}}</span></td>
                        </tr>
                        <tr style="height: 30px;">
                            <td class="lz_td1" align="right"><span>证件类型：</span></td>
                            <td class="lz_td2"><span>中华人民共和国居民身份证</span></td>
                        </tr>
                        <tr style="height: 30px;">
                            <td class="lz_td1" align="right"><span>证件号码：</span></td>
                            <td class="lz_td2"><span>{{number}}</span></td>
                        </tr>
                        <tr style="height: 30px;">
                            <td class="lz_td1" align="right"><span>笔试报名学校校区：</span></td>
                            <td class="lz_td2"><span>{{localtion}}</span></td>
                        </tr>
                        <tr style="height: 30px;">
                            <td class="lz_td1" align="right"><span>报考状态：</span></td>
                            <td class="lz_td2"><span :style="state=='未通过'?'color:red':''">{{state}}</span></td>
                        </tr>
                        <tr style="height: 30px;" v-if="comment">
                            <td class="lz_td1" align="right"><span>审核意见：</span></td>
                            <td class="lz_td2"><span :style="state=='未通过'?'color:red':''">{{comment}}</span></td>
                        </tr>
                    </table>

                </td>
            </tr>


        </table>

        <div class="zc_a_box">

            <div>
                <div class="alert " style="margin-top: 15px;background-color: rgba(0,0,0,.1)">
                    <table style="width:95%; margin: -10px 0px;" border="0">
                        <tr>
                            <td align="right" style="width: 120px;font-size: 18px;color: black">通告信息：</td>
                            <td align="left"><span style="margin-left: 10px; color: #212963;"></span></td>
                        </tr>
                    </table>
                </div>
                <div style="margin-top: -18px;border-top:1px solid #dff0d8">
                    <table width="100%" style="font-size: 16px;text-indent: 10px; line-height:26px;" id="notice; ">
                        <tr>备注：</tr>
                        <tr>1.考生凭准考证、身份证和考试证（研究生凭准考证、身份证和学生证）参加考试，三证缺一不可。</tr>
                        <tr>2.考生必须按规定的时间（上午8:30；下午14:30）入场，（上午9:00；下午15:00）响铃后，禁止入场。</tr>
                        <tr>3．手机等通讯工具必须关闭上交，考试中使用按作弊处理；考试全过程考生不得中途离场，更不能提前交卷。</tr>
                        <tr>4.考生必须严格按要求做答题目。书写部分一律用黑色字迹签字笔做答，填涂信息点时只能用2B铅笔涂黑。必须在规定考生做答的位置书写或填涂信息点，考生不正确填涂个人信息，贴错、不贴条形码粘贴条者按违纪处理。</tr>
                        <tr>5.遇试卷分发错误或试题字迹不清等情况应及时要求更换；涉及试题内容的疑问，不得向监考员询问。</tr>
                        <tr>6．非听力考试期间不得佩戴耳机。</tr>
                        <tr>7．考试结束后，严禁考生将试卷、答题卡私自带出考场，如若带出按违纪处理。</tr>
                        <tr>考点提示</tr>
                        <tr>开考前三天，上午9:00-11:00，下午15:00-17:00，会统一播放试音，考生将耳机调至校台FM1（数显80HZ）进行试音； CET4听力时间为25分钟，CET6听力时间为30分钟。
</tr>
       </table></div>
            </div>
        </div>
        </div>
<mybottom></mybottom>
    </div>
</template>

<script>
    import myhead from"../components/public/head"
    import  mybottom from "../components/public/bottom"
    export default {
        name: "detail",
        data: function () {
            return {
                name: "***",
                sex: "***",
                peopletype: "***",
                number: "***",
                localtion: "***",
                state: "***",
                file:"默认.jpg",
                comment:""
            }
        },
        method: {},
        components:{
            myhead,
            mybottom
        },

        mounted() {
            this.$http.get("detail?number="+localStorage.getItem("number") ).then(result => {
                var data=JSON.parse( result.bodyText)[0];

                    this.name=data.name,
                    this.sex=data.sex,
                    this.peopletype=data.peopletype,
                    this.number=data.number,
                    this.localtion=data.provinces+""+data.citys+""+data.site,
                    this.state=data.state,
                    this.file=data.file,
                       this.comment=data.comment
            })
        }
    }
</script>

<style scoped>
.lz_td1{
    min-width:70px;
}
#notice tr{
    width: 100%;
    padding: 5px 10px;
}
    .body{
        background-image: url("../assets/images/gift-made-surprise-loop-45238.jpeg");
        background-size: cover;
        padding-top: 35px;
        padding-bottom:35px;
        border-top:2px solid #eaeaea;
    }
</style>