// Multiple arguments
let add = function (a, b, c) {
    return a + b + c;
}

let result = add(10, 1, 5);
console.log(result);

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score;
}

let scoreText = getScoreText();
console.log(scoreText);

// Challenge area
// total, tipPercent .2

let getTip = function (total, tipPercent = .2) {
    return total * tipPercent;
}

let tipOne = getTip(100, undefined);
let tipTwo = getTip(100, .3);
console.log(tipOne);
console.log(tipTwo);