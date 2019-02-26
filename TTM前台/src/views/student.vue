<template>
    <div>
        <div id="zc_box" class="">
<myhead></myhead>
<div class="stbody">

            <div id="zc_main" class="" style="height:auto;">

                <!--<div id="zc_title" class="cen"><h1>欢迎登录English考试报名系统</h1></div>-->

                <div id="" class="p100">
                    <table class="table  table-hover table-striped table-condensed" style=";border-radius: 3px;">

                        <thead>
                        <tr>
                            <td colspan="2" align="center" class="ufo_table_02_title" style="font-size: 18px">基本信息</td>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td class="td_title">考次名称：</td>

                            <td class="td_content">2018年英语考试</td>

                        </tr>
                        <tr>
                            <td class="td_title">报名状态：</td>

                            <td class="td_content">{{state}}</td>

                        </tr>
                        <tr>
                            <td class="td_title">笔试报考状态：</td>

                            <td class="td_content">{{state}}</td>

                        </tr>
                        <tr>
                            <td class="td_title">笔试支付状态：</td>

                            <td class="td_content"> 未支付</td>

                        </tr>
                        <tr>
                            <td class="td_title">口试报考状态：</td>

                            <td class="td_content">未报考</td>

                        </tr>
                        <tr>
                            <td class="td_title">笔试报名时间：</td>

                            <td class="td_content">2018-09-19 11:30 至 2018-09-30 17:00</td>

                        </tr>
                        <tr>
                            <td class="td_title">口试报名时间：</td>

                            <td class="td_content">2018-09-17 13:30 至 2018-09-30 17:00</td>

                        </tr>

                        <tr>
                            <td class="td_title">笔试准考证打印开始时间：</td>

                            <td class="td_content">2018-12-03 09:00</td>

                        </tr>
                        </tbody>

                        <tfoot>
                        <tr>
                            <td colspan="2" align="center" class="ufo_table_02_title"></td>
                        </tr>
                        </tfoot>

                    </table>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0"  style="font-size: 18px">
                        <tr>
                            <td align="center" style="width: 100%">
                                <div class="zc_button" @click="viewCandidate">{{button}}</div>
                            </td>

                        </tr>
                    </table>
                </div>

                <br />

            </div>

            <form id="sidForm" action='' method="post" target="_self">
                <input name="__RequestVerificationToken" type="hidden" value="9xWh4EIrZl7YBnrCSWU4a4JUNhRU843cM9w-BFj0eCVO5E3tvTapm672_XBqXA3zKOytFpg7rr76nUHj4p8aQCwWEpK2-e-pbzligoyFt_o1" />
                <input type="hidden" name="sid" id="hiddenSID" />
            </form>

</div>


          <mybottom></mybottom>
        </div>


    </div>
</template>

<script>
    import myhead from"../components/public/head"
    import  mybottom from "../components/public/bottom"
    export default {
                name: "student",
                data:function () {
                    return{
                        // name:"",
                        time:"2018 年下半年考试",
                        state:"***",


                    }

                },
            components:{
                myhead,
                mybottom
            },
                mounted:function(){
                    // this.name=localStorage.getItem("name");

                    this.$http.get("state?number="+localStorage.getItem("number") ).then(result => {
                        this.state=JSON.parse( result.bodyText).msg;

            })

        },
        computed:{
            button:function(){

                if(this.state=="已报名"){
                    return "查看详细信息";}
                     else if(this.state=="未报名"){
                      return "立即报考";}
                     else
                         return "提示信息"
            }
        },
        methods:{
            viewCandidate:function(){
                if(this.button=="立即报考"){
                    this.$router.push({path:'/index/signupdetail'});
                }
                else if(this.button=="查看详细信息"){
                    this.$router.push({path:'/index/detail'});
                }
                else{
                    alert("请尽快登录哦！")
                }
            },

        }
    }
</script>

<style scoped>
    .stbody{
        border-top: 2px solid #5E834E;
    background: url("../assets/images/branch-bright-close-up-1650035.jpg") ;
        background-size: cover;
        overflow: hidden;
    }
.p100{
background-color: rgba(255,255,255,0.8);
color: black;
    font-size: 18px;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 50px;
    padding-bottom: 80px;
    border-radius: 10px;
    box-shadow: 2px 2px 5px #5E834E
    /*margin-top: 30px;*/
}
.sidForm{
    /*margin-top: 30px;*/
}
.zc_button{
display: inline;
    background-color: #5E834E;
    color: white;
    padding: 8px 20px;
    border-bottom-left-radius: 20px ;
    border-bottom-right-radius: 20px ;
    border-top-right-radius: 20px ;
    border-top-left-radius: 20px ;
    margin-top: 20px;
    }

</style>