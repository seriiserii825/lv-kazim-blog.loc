require('./bootstrap');

import Vue from "vue";
import VueRouter from "vue-router";
import App from "./components/App";
import routes from "./routes";

Vue.use(VueRouter);
Vue.component('pagination', require('laravel-vue-pagination'));

const router = new VueRouter(routes);

const app = new Vue({
    el: '#app',
    components: {App},
    router
});
