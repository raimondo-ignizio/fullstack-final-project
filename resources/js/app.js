require('./bootstrap');
require('../sass/app.scss')
import Vue from 'vue'
import VueHeader from "./components/VueHeader.vue";
import VueFooter from "./components/VueFooter.vue";

window.Vue = require('vue');

// router
import router from './router.js';
window.router = router;
window.Fire = new Vue();


Vue.component("vue-header", VueHeader);
Vue.component("vue-footer", VueFooter);

const app = new Vue({
    el: '#app',
    router,
}).$mount('#app');
