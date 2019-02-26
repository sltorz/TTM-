<template>
    <div>
        <table border="0" cellspacing="0" cellpadding="0" style="font-size: 16px;height:60px;width: 100%">
            <tr>
                <td width="10%">

                    <a style="text-decoration: none">
                        <i class="icon-onlinecustomerservice2"></i>&nbsp;<span >欢迎回来</span>
                    </a>

                </td>
                <td width="45%">
                    <i class="icon-user" />&nbsp;
                </td>
                <td width="30%">

                </td>
                <td width="15%">
                    <a title="点击退出报名系统" style="cursor: pointer ;text-decoration:none" @click="exit"   >
退出
                    </a>
                </td>

            </tr>
        </table>
        <h2>未审核学生列表：</h2>
     <div  v-for="item  in list" :id="item.number" :key="item._id">
         {{item.name}}<button class="btn btn-success" @click="detail(item.number)">详情</button>
     </div>
    </div>
</template>

<script>
    export default {
        name: "list",
        data:
        function(){
            return {
                list:[]
            }
        },
        mounted() {
            this.$http.get("detail" ).then(result => {
                this.list=JSON.parse( result.bodyText);



            })
        },
        methods:{
            detail:function(number){
                this.$router.push({path: '/index/administrator?number='+number});
            },
            exit:function(){
                this.$router.push({path: '/index/login'});
            }
        }



    }
</script>

<style scoped>

</style>