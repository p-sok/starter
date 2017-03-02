import Vue		 from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import HomeView from './views/HomeView.vue';
import TestView from './views/TestView.vue';
console.log(HomeView);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
            path: '/',
            component: HomeView
        },
        {
            path: '/test',
            component: TestView
        }
	]
})
