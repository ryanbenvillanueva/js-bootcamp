let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
};

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
};

// addIncome
let addIncome = function (account, amount) {
    account.income = account.income + amount;
};

// resetAccount
let resetAccount = function (account) {
    account.expenses = 0;
    account.income = 0;
};

// getAccountSummary
// Account for Andrew has $900. $1000 in income. S100 in expenses.

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses;

    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 1000);
addExpense(myAccount, 50);
addExpense(myAccount, 50);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));

// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary
