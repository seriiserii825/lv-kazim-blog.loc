require('./bootstrap');

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import App from "./components/App";
import PostsIndex from "./components/Posts/Index";
import PostsCreate from "./components/Posts/Create";

Vue.component('pagination', require('laravel-vue-pagination'));

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: PostsIndex
        },
        {
            path: "/posts/create",
            component: PostsCreate
        }
    ]
});

const app = new Vue({
    el: '#app',
    components: {App},
    router
});
