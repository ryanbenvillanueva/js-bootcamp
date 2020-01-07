

const todos = ['Order Cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise' ];

todos.splice(2, 1);
todos.push('This is the new last item');
todos.shift();

console.log(`You have ${todos.length} todos!`);
console.log(todos);