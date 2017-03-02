import '../styles/main';

import $ from 'chirashi';

import Vue from 'vue';
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';

//var home = require('./home.js'); // CommonJS
//import home from './home'; // ES2015

// ROUTER
/*Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes : [
        {
            path: '/',
            component: require('./components/HomeView')
        }
    ]
});*/

// COMPONENTS
import './components/index';

Vue.use(VueResource);

$.ready(() => {
    console.log('index ready');

    new Vue({
        el: '#app',
        //router,
        data: {
            message: 'test',
            href:  'http://www.google.fr'
        },
        methods : {

        }
    });
});
