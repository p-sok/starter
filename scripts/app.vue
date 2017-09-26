<script>
    // COMPONENTS
    import Components from './components/index';

    // ROUTER
    import router from './router/index';

    $.ready(() => {
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
