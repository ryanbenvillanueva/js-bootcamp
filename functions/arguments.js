// Multiple arguments
let add = function (a, b, c) {
    return a + b + c;
}

let result = add(10, 1, 5);
console.log(result);

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    // return 'Name: ' + name + ' - Score: ' + score;
    return `Name: ${name} - Score: ${score}`;
}

let scoreText = getScoreText();
console.log(scoreText);

// Challenge area
// total, tipPercent .2
// A 25% tip on $40 would be $10.

let getTip = function (total, tipPercent = .2) {
    return `A 25% tip on $${total} would be $${total * tipPercent}`;
}

let tip = getTip(40, .25);
console.log(tip);

