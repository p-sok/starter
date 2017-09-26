import Components from '../components/index';
import Pages from '../pages/index';

export default [
    {
        path: '/',
        name: 'home',
        component: Pages.home
    },
    {
        path: '/sample',
        name: 'sample',
        component: Pages.sample
    },
    {
        path: '/item/:name',
        name: 'item',
        component: Pages.item
    },
    {
        path: '*',
        component: Pages.notFoundPage
    }
];
