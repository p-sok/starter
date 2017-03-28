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
                'sample': Components.sample,
                'custom-header': Components.headerView
            },
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
</script>
