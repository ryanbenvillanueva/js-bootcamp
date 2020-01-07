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
// 1. Convert array to array of objects -> text, completed
// 2. Create a function to remove a todo by text value

deleteTodo(todos, 'buy food');
console.log(todos);