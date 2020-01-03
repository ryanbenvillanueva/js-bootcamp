// undefined for variable
let name

name = 'Jen'

if (name === undefined) {
    console.log('Please provide a name');
} else {
    console.log(name);
}

// undefined for function arguments
// undefined as function default value
let square = function(num) {
    console.log(num)
}

let result = square()
console.log(result)

// null as assigned value
let age = 27;

age = null;

console.log(age)