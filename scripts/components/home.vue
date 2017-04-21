<template id="home">
    <section class="home-section">
        <div id="loop">
            <h2 class="h2">Loop</h2>
            <br /><br />
            <ul class="row">
                <li v-for="todo in todos" class="col-xs-3">
                    <router-link :to="{ path: todo.link }" :passedItem="{ todo }">{{ todo.text }}</router-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    // Import Stores
    import tasks from '../stores/tasks';

    var todos = new tasks();

    export default {
        template: '#home',
        data: () => {
            return {
                todos: todos.state.todos
            }
        }
    }
</script>
