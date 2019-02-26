<template>
    <div>
        <table border="0" cellspacing="0" cellpadding="0" style="font-size: 16px;height:60px;width: 100%">
            <tr>
                <td width="10%">

                    <a style="text-decoration: none">
                        <i class="icon-onlinecustomerservice2"></i>&nbsp;

                    </a>

                </td>
                <td width="45%">
                    <i class="icon-user" />&nbsp;<span >欢迎回来></span>
                </td>
                <td width="30%">

                </td>
                <td width="15%">
                    <a title="点击退出报名系统" style="cursor: pointer ;text-decoration:none" @click="exit"   >
                        返回

                    </a>
                </td>

            </tr>
        </table>
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
                                <td class="lz_td2"><select name="" id="" v-model="state">
                                    <option value="审核通过">审核通过</option>
                                    <option value="待审核">待审核</option>
                                    <option value="未通过">未通过</option>
                                </select> </td>
                            </tr>
                            <tr style="height: 30px;" >
                                <td class="lz_td1" align="right"><span>审核意见：</span></td>
                                <td class="lz_td2"><textarea name="" id="" cols="30" rows="3" style="border: 1px solid #ccc" v-model="comment"></textarea> </td>
                            </tr>
                            <tr style="height: 30px;" >

                                <td class="lz_td2"><button class="btn success btn-block" @click="submit">提交</button></td>
                            </tr>
                        </table>

                    </td>
                </tr>


            </table>
        </div>
        </div>
</template>

<script>
    export default {
        name: "administrator",
        data:function(){
            return{
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
        mounted() {

            this.$http.get("detail?number="+this.$route.query.number).then(result => {

                var data=JSON.parse( result.bodyText)[0];
                this.name=data.name,
                    this.sex=data.sex,
                    this.peopletype=data.peopletype,
                    this.number=data.number,
                    this.localtion=data.provinces+""+data.citys+""+data.site,
                    this.state=data.state,
                    this.file=data.file
            })
        },
        methods:{
            submit:function(){

                this.$http.post("auditing",{state:this.state,comment:this.comment,number:this.number}).then(result => {
                    alert(result.bodyText)
                })
            },
    exit:function(){
        this.$router.push({path: '/index/list'})
    }
        }
    }
</script>

<style scoped>

</style>