<template>
    <div >
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
                            <i class="icon-user" />&nbsp; 姓名： <span v-text="headername?headername:'您还未登录'"></span>
                        </td>
                        <td width="30%">

                        </td>
                        <td width="15%">
                            <a title="点击退出报名系统" style="cursor: pointer ;text-decoration:none" @click="exit"  >
                              前往详情
                            </a>
                        </td>

                    </tr>
                </table>
            </div>
        </div>
        <div class="body">
       <div class="sudbody">
           <h2>基本信息</h2>
           <form class="form-horizontal" enctype="multipart"  >
               <div class="form-group" >
                   <label for="inputEmail3" class="col-sm-2 control-label">姓名</label>
                   <div class="col-sm-10">
                       <input type="email" class="form-control" id="inputEmail3" placeholder="请输入姓名" v-model="name">
                   </div>
               </div>

               <div class="form-group">
                   <label  class=" control-label col-sm-2">性别</label>
                   <div class="col-sm-10">
                       <select class="form-control "   v-model="sex">
                           <option value="">- 请选择 -</option>
                           <option value="男">男</option>
                           <option value="女">女</option>
                       </select>
                   </div>
               </div>
               <div class="form-group">
                   <label for="inputPassword3" class="col-sm-2 control-label">出生日期</label>
                   <div class="col-sm-10">
                       <input type="date" class="form-control" id="inputPassword3" v-model="date" >
                   </div>
               </div>
               <div class="form-group">
                   <label  class=" control-label col-sm-2">民族</label>
                   <div class="col-sm-10">
                       <select class="form-control "  v-model="nation">
                           <option value="">- 请选择 -</option>
                           <option value="汉族">汉族</option>

                       </select>
                   </div>
               </div>
               <div class="form-group">
                   <label  class=" control-label col-sm-2">职业</label>
                   <div class="col-sm-10">
                       <select class="form-control "   v-model="people">
                           <option value="">- 请选择 -</option>
                           <option value="学生">学生</option>
                           <option value="事业单位负责人">事业单位负责人</option>
                           <option value="企业负责人">企业负责人</option>
                           <option value="军人">军人</option>
                           <option value="失业">失业（含待业及无业人员）</option>
                           <option value="其他">其他</option>

                       </select>
                   </div>
               </div>
               <div class="form-group">
                   <label  class=" control-label col-sm-2">文化程度</label>
                   <div class="col-sm-10">
                       <select class="form-control "  v-model="qualifications">
                           <option value="">- 请选择 -</option>
                           <option value="博士">博士</option>
                           <option value="硕士">硕士</option>
                           <option value="本科">本科</option>
                           <option value="大专">大专</option>
                           <option value="高中">高中</option>
                           <option value="初中">初中</option>
                           <option value="初中以下">初中以下</option>
                       </select>
                   </div>
               </div>
               <div class="form-group">
                   <label  class=" control-label col-sm-2">培训类型</label>
                   <div class="col-sm-10">
                       <select class="form-control "   v-model="type">
                           <option value="">- 请选择 -</option>
                           <option value="在校正规课程">在校正规课程</option>
                           <option value="社会培训">社会培训</option>
                           <option value="未参加培训">未参加培训</option>
                       </select>
                   </div>
               </div>
               <h2>身份验证信息</h2>
               <div class="form-group">
                   <label  class=" control-label col-sm-2">证件类型</label>
                   <div class="col-sm-10">
                       <select class="form-control "  v-model="peopletype" >
                           <option value="">- 请选择 -</option>
                           <option value="中华人民共和国居民身份证">中华人民共和国居民身份证</option>
                       </select>
                   </div>
               </div>
                   <div class="form-group">
                       <label for="inputEmail3" class="col-sm-2 control-label">证件号</label>
                       <div class="col-sm-10">
                           <input type="text" class="form-control"  placeholder="请输入证件号" v-model="number">
                       </div>
                   </div>
               <div class="form-group" >
                   <label for="inputEmail3" class="col-sm-2 control-label">个人照片</label>
                   <div class="col-sm-10">
                       <el-upload
                               class="upload-demo"
                               ref="upload"
                               action="http://39.105.102.76:3000/file"
                               :on-preview="handlePreview"
                               :on-remove="handleRemove"
                               :file-list="fileList"
                               :auto-upload="false">
                           <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                           <!--<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>-->
                           <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                       </el-upload>
                       <!--<input type="file" class="form-control" style="border:0px ;box-shadow: none"  ref="file">-->
                   </div>
               </div>
               <h2>选择报考地点</h2>
               <div>

                   <div class="form-group">
                       <label  class="col-sm-2 control-label">省</label>
                       <div class="col-sm-2">
                           <select class="form-control "  v-model="provinces"  @change="province">
                               <option value="">- 请选择 -</option>
                               <option value="安徽省">安徽省</option>
                               <option value="江苏省">江苏省</option>

                           </select>
                       </div>
                       <label  class="col-sm-2 control-label">市</label>
                       <div class="col-sm-2">
                           <select class="form-control "   v-model="citys"  @change="city">
                               <option value=""  >- 请选择 -</option>
                               <option v-for="item in citytype" :key="item._id" :value="item.city" >{{item.city}}</option>
                           </select>
                       </div>
                       <label for="inputEmail3" class="col-sm-2 control-label">考点</label>
                       <div class="col-sm-2">
                           <select class="form-control " v-model="site" >
                               <option value="">- 请选择 -</option>
                               <option  v-for="item  in provincetype"  :key="item._id" :value="item">{{item}}</option>
                           </select>
                       </div>
                   </div>
                   <div class="form-group">

                   </div>
               </div>
              <input type="button" class="btn btn-success btn-block"  value="报名" @click="submit" :disabled="disable">
           </form>

       </div>
        </div>
        <mybottom></mybottom>
    </div>
</template>

<script>
    import { MessageBox } from 'mint-ui';
    import  file from "../components/public/file.vue"
    import myhead from"../components/public/head.vue"
    import  mybottom from "../components/public/bottom"
    export default {
        data:function(){
            return{
                file:"",
                date:"",
                number:"",
                type:"",
                nation:"",
                qualifications:"",
                people:"",
                peopletype:"",
                sex:"",
                name:"",
                citys:"",
                citytype:[],
                provinces:"",
                provincetype:[],
                site:"",
                fileList: [],
                headername:""

            }
        },
        mounted:function() {
            this.headername = localStorage.getItem("name");

        },
        components:{

            mybottom
        },
       computed:{
            disable:function(){

                var disabled= (this.site)&&(this.date)&&(this.number)&&(this.type)&&(this.nation)&&(this.qualifications)&&(this.people)&&(this.peopletype)&&(this.sex)&&(this.name)&&(this.citys)&&(this.provinces);
                     return !disabled

            }
        },
methods:{
    province:function(){

        this.$http.get("province?province="+this.provinces).then(result => {
            this.citytype=JSON.parse(result.bodyText)

        })

    } ,
    city:function() {
        this.$http.get("city?city=" + this.citys+"&province="+this.provinces).then(result => {
            this.provincetype=JSON.parse(result.bodyText)[0].site

        })
    },

    handleRemove(file, fileList) {

    },
    handlePreview(file) {

    }
,
    submit:function(){
        this.$refs.upload.submit();
        MessageBox({
            title: '提示信息',
            message: '该信息将作为报考信息，请确保填写正确！',
            showCancelButton: true,
           confirmButtonText:"确定提交信息",
            cancelButtonText:"在检查一下"

    }).then(action=>{
            if(action == 'confirm'){
                var data={
                    number:this.number,
                    type:this.type,
                    nation:this.nation ,
                    qualifications:this.qualifications ,
                    people:this.people ,
                    peopletype:this.peopletype,
                    sex:this.sex,
                    name:this.name,
                    citys:this.citys,
                    provinces:this.provinces,
                    site:this.site

                };
                localStorage.setItem("number",this.number);

                if(this.$route.query.update) {

                    this.$http.post("update", data).then(result => {
                        alert(JSON.parse(result.bodyText).提示);

                    })
                }else{
                    this.$http.post("signup", data).then(result => {
                        alert(JSON.parse(result.bodyText).提示);

                    })
                }


            }
        });


    },

    exit:function(){

        this.$router.push({path:'/index/detail'});
    }

}
    }
</script>


<style scoped>
    @import "~mint-ui/lib/message-box/style.css";
    .sudbody{
        margin: 0 auto;
        max-width:600px;
        width:100%
    }
    h2{
        text-align: center;
        margin: 30px 0px;
    }
    .body{
        padding-top: 20px;
        padding-bottom: 40px;
        background-image: url("../assets/images/color-design-flora-1166644.jpg");
        background-size:cover ;
    }
</style>