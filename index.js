#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Define the currency rates
const currency = {
    USD: 1.0, // Base currency (US Dollar)
    EUR: 0.91, // Euro
    GBP: 0.76, // British Pound
    JPY: 143.1, // Japanese Yen
    PKR: 278.75, // Pakistani Rupee
};
// Function to prompt the user for input
async function getUserInput() {
    return await inquirer.prompt([
        {
            name: "from",
            message: "From which currency do you want to convert?",
            type: "list",
            choices: ["USD", "EUR", "GBP", "JPY", "PKR"],
        },
        {
            name: "to",
            message: "To which currency do you want to convert?",
            type: "list",
            choices: ["USD", "EUR", "GBP", "JPY", "PKR"],
        },
        {
            name: "amount",
            message: "Enter the amount you want to convert:",
            type: "input",
            validate: (input) => {
                const amount = parseFloat(input);
                if (isNaN(amount) || amount <= 0) {
                    return "Please enter a valid positive number";
                }
                return true;
            },
        },
    ]);
}
// Function to perform currency conversion
function convertCurrency(from, to, amount, rates) {
    let fromAmount = rates[from]; // Exchange rate for the base currency
    let toAmount = rates[to]; // Exchange rate for the target currency
    let baseAmount = amount / fromAmount; // Amount in the base currency
    return baseAmount * toAmount; // Converted amount in the target currency
}
// Main function to execute the program
async function main() {
    console.log(chalk.green("Welcome to the Currency Converter!")); // Greeting message
    let exit = false;
    while (!exit) {
        try {
            let user_answer = await getUserInput(); // Get user input
            // Check if the same currency is selected for both 'from' and 'to'
            if (user_answer.from === user_answer.to) {
                console.log(chalk.yellow("Please select different currencies for conversion."));
            }
            else {
                let amount = parseFloat(user_answer.amount); // Parse the amount to a number
                let convertedAmount = convertCurrency(user_answer.from, user_answer.to, amount, currency); // Perform conversion
                console.log(chalk.blue(`Converted amount: ${convertedAmount.toFixed(2)} ${user_answer.to}`)); // Display the results
            }
            // Ask if the user wants to perform another conversion or exit
            let { continueChoice } = await inquirer.prompt([
                {
                    name: "continueChoice",
                    message: "Do you want to perform another conversion?",
                    type: "confirm",
                    default: true,
                },
            ]);
            exit = !continueChoice; // Set exit to true if the user chooses not to continue
        }
        catch (error) {
            console.error(chalk.red("An error occurred:", error)); // Handle any errors that occur during the prompt
        }
    }
    console.log(chalk.green("Thank you for using the Currency Converter! Goodbye!")); // Farewell message
}
// Execute the main function
main();
