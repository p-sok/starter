<template id="item">
    <section class="item-section">
        <router-link :to="{ name: 'home' }">Back to home</router-link>
        <br /><br />
        <router-link :to="filteredItem[0].prev" v-if="filteredItem[0].prev.length" go>Prev</router-link>
        <h2 class="h2">{{ filteredItem[0].text }}</h2>
        <router-link :to="filteredItem[0].next" v-if="filteredItem[0].next.length" go>Next</router-link>
    </section>
</template>

<script>
    // Import Stores
    import tasks from '../stores/tasks';
    var todos = new tasks();

    export default {
        template: '#item',
        data: () => {
            return {
                todos: todos.state.todos
            }
        },
        computed: {
            filteredItem: function() {
                return this.todos.filter((todo) => {
                    return todo.text == this.$route.params.name
                });
            }
        }
    }
</script>
