function calculateBudget() {
    var income = parseFloat(document.getElementById('income').value);
    var expenses = parseFloat(document.getElementById('expenses').value);
    var resultElement = document.getElementById('result');

    if (isNaN(income) || isNaN(expenses)) {
        resultElement.innerHTML = 'Please enter valid numbers for income and expenses.';
        return;
    }

    var budget = income - expenses;

    if (budget > 0) {
        resultElement.innerHTML = 'You have a surplus of $' + budget.toFixed(2) + '.';
    } else if (budget < 0) {
        resultElement.innerHTML = 'You have a deficit of $' + Math.abs(budget).toFixed(2) + '.';
    } else {
        resultElement.innerHTML = 'Your income equals your expenses. You have a balanced budget.';
    }
}
