import Vue from "vue";
import Router from "vue-router";
import Index from "./views/index.vue";
import Ksjj from "./views/ksjj.vue";
import Ksxz from "./views/ksxz.vue";
import Kssj from "./views/kssj.vue";
import Bmlc from "./views/bmlc.vue";
import Cjwt from "./views/cjwt.vue";
import Tbts from "./views/tbts.vue";
import Zhzh from "./views/zhzh.vue";
import Zhuce from "./views/zhuce.vue";
import Login from "./views/login.vue";
import Student from "./views/student.vue";
import Sud from "./views/siginupdetail.vue";
import detail from "./views/detail.vue";
import administrator from "./views/administrator.vue";
import list from "./views/list.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/index" ,

    },
    {
      path: "/index",
      component: Index,
      meta:{
        show:true
      }

    },
    {
      path: "/ksjj",
      component : Ksjj,
      meta:{
        show:true
      }
    },
    {
      path: "/ksxz",
      component: Ksxz,
      meta:{
        show:true
      }
    },
    {
      path: "/kssj",
      component : Kssj,
      meta:{
        show:true
      }
    },
    {
      path: "/bmlc",
      component: Bmlc,
      meta:{
        show:true
      }
    },
    {
      path: "/cjwt",
      component: Cjwt,
      meta:{
        show:true
      }
    },
    {
      path: "/tbts",
      component: Tbts,
      meta:{
        show:true
      }
    },
    {
      path: "/index/zhzh",
      component: Zhzh,
      meta:{
        show:false,
      }
    },
    {
      path: "/index/zhuce",
      component: Zhuce
    },
    {
      path: "/index/login",
      component: Login
    },
    {
      path: "/index/student",
      component: Student,
      meta:{
        header:"基本信息"
      }
    },
    {
      path: "/index/signupdetail",
      component: Sud,
      meta:{
        header:"报名信息"
      }
},

    {
      path: "/index/detail",
      component: detail,
      meta:{
        header:"详细信息"
      }
    },
    {
      path: "/index/list",
      component: list,
      meta: {
        header: "欢迎回来"
      }
    },
    {
      path: "/index/administrator",
      component: administrator,
    }


  ]
});
