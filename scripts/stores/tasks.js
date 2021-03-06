var tasksClass = class tasksGroup {
    constructor() {
        this.state = {
            todos: [
                {
                    text: 'task1',
                    link: '/item/task1',
                    prev: '',
                    next: '/item/task2'
                },
                {
                    text: 'task2',
                    link: '/item/task2',
                    prev: '/item/task1',
                    next: '/item/task3'
                },
                {
                    text: 'task3',
                    link: '/item/task3',
                    prev: '/item/task2',
                    next: '/item/task4'
                },
                {
                    text: 'task4',
                    link: '/item/task4',
                    prev: '/item/task3',
                    next: ''
                }
            ]
        }
    }
}

export default tasksClass;
