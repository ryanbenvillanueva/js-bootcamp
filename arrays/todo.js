const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
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

const sortTodos = function(todos) {
    todos.sort (function (a, b) {
        if (a.completed === b.completed) {
            return 0;
        } else if (a.completed) {
            return 1;
        } else {
            return -1;
        }
    });
};

sortTodos(todos);
console.log(todos);
// console.log(getThingsToDo(todos));

// deleteTodo(todos, 'buy food');
// console.log(todos);