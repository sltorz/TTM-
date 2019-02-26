import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from 'vue-resource';

import element from "element-ui";
import "element-ui/lib/theme-chalk/index.css"
Vue.use(element);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
Vue.http.options.root = 'http://39.105.102.76:3000';
//Vue.http.options.root = 'http://localhost:3000';
import "./registerServiceWorker";

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
