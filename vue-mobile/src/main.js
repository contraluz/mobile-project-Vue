import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import {routes} from './routes';
import axios from 'axios';
import VueAxios from 'vue-axios';


import {store} from './store';
const router = new VueRouter({
	routes:routes, 
	mode:'history' 
});

Vue.use(MintUI)
Vue.use(VueRouter);
Vue.use(VueAxios, axios)

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
