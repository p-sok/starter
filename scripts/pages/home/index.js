// Import Stores
import tasks from '../../stores/tasks';

export default {
    template: require('./template.html'),

    data() {
        return {
            todos: []
        }
    },

    created() {
        let data = new tasks();
        this.todos = data.state.todos;
    }
}
