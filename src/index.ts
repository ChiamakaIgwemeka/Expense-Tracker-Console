import * as readlineSync from 'readline-sync';

/**
 * Represents an expense with a name, amount, date, and category.
 */
interface Expense {
    name: string;
    amount: number;
    date: string;
    category: string;
}

/**
 * Array to store all the expenses.
 */
let expenses: Expense[] = [];

/**
 * Prompts the user to enter expense details and adds the expense to the list.
 */
function addExpense(): void {
    const name = readlineSync.question('Enter expense name: ');
    const amount = parseFloat(readlineSync.question('Enter amount: '));
    const date = readlineSync.question('Enter date (YYYY-MM-DD): ');
    const category = readlineSync.question('Enter category: ');

    // Validate input
    if (!name || isNaN(amount) || !date || !category) {
        console.log('Invalid input. Please try again.');
        return;
    }

    // Create new expense object
    const expense: Expense = { name, amount, date, category };
    // Add expense to the list
    expenses.push(expense);
    console.log('Expense added successfully.');
}

/**
 * Displays all the expenses in the list.
 */
function viewExpenses(): void {
    console.log('\nExpenses:');
    console.log('--------------------------------------');
    expenses.forEach(expense => {
        console.log(`Name: ${expense.name}`);
        console.log(`Amount: ${expense.amount}`);
        console.log(`Date: ${expense.date}`);
        console.log(`Category: ${expense.category}`);
        console.log('--------------------------------------');
    });
}

/**
 * Calculates and displays the total amount of all expenses.
 */
function getTotalExpenses(): void {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    console.log(`Total Expenses: $${total.toFixed(2)}`);
}

/**
 * Main function to present a menu to the user and handle their choices.
 */
function main(): void {
    while (true) {
        console.log('\nExpense Tracker');
        console.log('1. Add Expense');
        console.log('2. View Expenses');
        console.log('3. Get Total Expenses');
        console.log('4. Exit');

        const choice = readlineSync.question('Choose an option: ');

        switch (choice) {
            case '1':
                addExpense();
                break;
            case '2':
                viewExpenses();
                break;
            case '3':
                getTotalExpenses();
                break;
            case '4':
                console.log('Exiting...');
                return;
            default:
                console.log('Invalid choice. Please try again.');
        }
    }
}

// Start the application
main();
