import Components from '../components/index';

export default [
    {
        path: '/',
        name: 'home',
        component: Components.home
    },
    {
        path: '/sample',
        name: 'sample',
        component: Components.sample
    },
    {
        path: '/item/:name',
        name: 'item',
        component: Components.item
    },
    {
        path: '*',
        component: Components.notFoundComponent
    }
];
