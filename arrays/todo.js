

const todos = ['Order Cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise' ];

todos.splice(2, 1);
todos.push('Buy coffee');
todos.shift();

console.log(`You have ${todos.length} todos!`);

// 1. The first item
// 2. The second item

todos.forEach(function (todo, index) {
    console.log(`${index + 1}. ${todo}`);
});