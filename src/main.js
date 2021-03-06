import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import axios from 'axios';
import vueAxios from 'vue-axios';

Vue.config.productionTip = false

Vue.use(vueAxios, axios);
axios.defaults.baseURL = "http://localhost:3000";

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')