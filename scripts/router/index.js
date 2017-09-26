import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes,
});

let isGlobalLoaded = false;

router.beforeEach(( to, from, next ) => {
    if ( !isGlobalLoaded ) {
        Vue.http.get('/json/global.json').then( response => {
            isGlobalLoaded = true;
            // get body data
            //this.someData = response.body;
            console.log( response );
            next();
        }, response => {
            // error callback
            console.log( 'error', response );
        });
    }
});

export default router;
