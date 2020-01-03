// Challenge Area

// convertFahrenheitToCelsius

// Call a couple of tiems (32 -> 0) (68 -> 20)

// Print the converted values

let convertFahrenheitToCelsius = function (temp) {
    let celsius = (temp - 32) * 5/9;
    return celsius;
}

let tempOne = convertFahrenheitToCelsius(32);
let tempTwo = convertFahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);
