import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      name:"",
      number:""
  },
  mutations: {
setname:function(state,name){
state.name=name;
},
      setnumber:function(state,number){
          state.number=number;
      },

  },
  actions: {}
});
