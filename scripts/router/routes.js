import Components from '../components/index';

export default [
    {
        path: '/',
        name: 'home',
        component: Components.home
    },
    {
        path: '/sample',
        name : 'sample',
        component: Components.sample
    },
    {
        path: '*',
        component: Components.notFoundComponent
    }
];
