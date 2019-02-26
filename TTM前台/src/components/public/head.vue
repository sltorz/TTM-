<template>
    <div>

        <div id="zc_logo">
            <div id="zc_logo_xx">
                <table border="0" cellspacing="0" cellpadding="0" style="font-size: 16px;height:60px;width: 100%">
                    <tr>
                        <td width="10%">

                            <a style="text-decoration: none">
                                <i class="icon-onlinecustomerservice2"></i>&nbsp;
                            {{$route.meta.header}}
                            </a>

                        </td>
                        <td width="45%">
                            <i class="icon-user" />&nbsp; 姓名： <span v-text="name?name:'您还未登录'"></span>
                        </td>
                        <td width="30%">

                        </td>
                        <td width="15%">
                            <a title="点击退出报名系统" style="cursor: pointer ;text-decoration:none" @click="exit"   v-text="(state=='审核通过'||state=='待审核'||state==undefined)?'退出':'前往修改'">

                            </a>
                        </td>

                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

        export default {

            data:function () {
                return{
                    name:"",

                }
            },
            props:[
                "state",
            ],
            mounted:function() {
                this.name = localStorage.getItem("name");

            },
            methods:{
                exit:function(){
                    if( this.state=='审核通过'||this.state=='待审核'||this.state==undefined) {
                        localStorage.removeItem("name");
                        localStorage.removeItem("number");
                        this.$router.push({path: '/index/login'});
                    }
                    else{
                        this.$router.push({path: '/index/signupdetail?update=true'});
                    }
                }
            }
    }
</script>

<style scoped>

</style>