const todos = [{
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}];

const deleteTodo = function (todos, todoText) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].text.toLowerCase() === todoText.toLowerCase()) {
            todos.splice(i, 1);
        }
    }
};

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed;
    });
};

console.log(getThingsToDo(todos));

// deleteTodo(todos, 'buy food');
// console.log(todos);