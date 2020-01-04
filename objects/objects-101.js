let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge area

// name, age, location

// Andrew is 27 and lives in Philadelphia.
// increase age by 1 and print message again

let person = {
    name: 'Ryan',
    age: 39,
    location: 'Tarlac'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);

person.age = person.age + 1;

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
