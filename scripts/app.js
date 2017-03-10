import '../styles/main';

import $ from 'chirashi';

import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

// COMPONENTS
import Components from './components/index';
console.log(Components);
// ROUTER
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes : [
        {
            path: '/',
            component: Components.headerView
        },
        {
            path: '/test',
            component: Components.sample
        }
    ]
});

Vue.use(VueResource);

$.ready(() => {
    console.log('index ready');

    new Vue({
        el: '#app',
        router,
        data: {
            message: 'test',
            href:  'http://www.google.fr',
            visible: true,
            todos: [
                { text: 'task1' },
                { text: 'task2' },
                { text: 'task3' }
            ],
            modelMessage: 'a message'
        },
        methods : {
            alertMessage: () => {
                alert('message');
            }
        },
        created: () => {
            console.log('vue created');
        },
        mounted: () => {
            console.log('vue mounted');
        },
        updated: () => {
            console.log('vue updated');
        },
        destroyed: () => {
            console.log('vue destroyed');
        }
    });
});
