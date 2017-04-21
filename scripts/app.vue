<script>
    import $ from 'chirashi';
    import Vue from 'vue';
    import VueResource from 'vue-resource';

    // COMPONENTS
    import Components from './components/index';

    // ROUTER
    import router from './router/index';

    // RESOURCE
    Vue.use(VueResource);

    $.ready(() => {
        console.log('index ready');

        new Vue({
            el: '#app',
            router,
            components: {
                'custom-header': Components.headerView,
                'custom-footer': Components.footerView
            },
            data: {
                message: 'test',
                href:  'http://www.google.fr',
                visible: true,
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
</script>
