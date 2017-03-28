<template id="home">
    <section class="home-section">
        <div id="loop">
            <h2 class="h2">Loop</h2>
            <br /><br />
            <ul class="row">
                <li v-for="todo in todos" class="col-xs-3">
                    <router-link :to="{ path: todo.link }">{{ todo.text }}</router-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        template: '#home',
        data: () => {
            return {
                todos: [
                    {
                        text: 'task1',
                        link: '/item/task1'
                    },
                    {
                        text: 'task2',
                        link: '/item/task2'
                    },
                    {
                        text: 'task3',
                        link: '/item/task3'
                    },
                    {
                        text: 'task4',
                        link: '/item/task4'
                    }
                ]
            }
        }
    }
</script>
