// students score, total possible score
// 15/20 -> You got a C (75%)
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let score = 15;
let total = 20;

let calculateGrade = function (score, total) {
    let percent = (score / total) * 100;
    let letterGrade = '';

    if (percent < 60) {
        letterpercent = 'F';
    } else if (percent < 70) {
        letterGrade = 'D';
    } else if (percent < 80) {
        letterGrade = 'C';
    } else if (percent < 90) {
        letterGrade = 'B';
    } else {
        letterGrade = 'A';
    }

    return `You got a ${letterGrade} (${percent}%)!`;
}

let letterGrade = calculateGrade(score, total);
console.log(letterGrade);