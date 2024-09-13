# Currency Converter CLI 💱
____________________________

Welcome to the Currency Converter CLI!

This simple CLI application allows users to convert amounts between USD, EUR, GBP, JPY, and PKR currencies efficiently. The application is written in TypeScript with Node.js and uses the inquirer and chalk packages for user input and enhanced CLI appearance.

______________
## Features 🌟
______________

- **Currency Conversion**: Convert between USD, EUR, GBP, JPY, and PKR. 💵
- **Interactive CLI**: User-friendly command-line interface with enhanced appearance using chalk. 🎨
- **Continuous Conversion**: Perform multiple conversions until you decide to exit. 🔄

____________________
## Prerequisites 🛠️
____________________

Before running the application, ensure you have the following installed:

- **Node.js**: To run the application, you’ll need Node.js installed on your system. You can download it from the [Node.js official website](https://nodejs.org/).
- **TypeScript**: The application is written in TypeScript, so you’ll need to install TypeScript. Use the following command in your terminal:

    ```
    npm install -g typescript
    ```
___________________
## Installation 🚀
___________________

1. **Clone this repository to your local directory:**

    ```
    git clone https://github.com/HasnainDevMaster/CLI-Currency-Converter.git
    ```
**Note:**

Navigate to the directory in which files are cloned

```
cd CLI-Currency-Converter
```

2. **Install the dependencies by running the following command in your terminal:**

    ```
    npm install
    ```

## Installation: NPM: 💻

Simply run the following command in your terminal (cmd):

Install:

```
npm i mrshas-currency-converter
```

Run:

```
npx mrshas-currency-converter
```
_____________________________
## Running the Application ▶️
_____________________________

Run the application using the command:

```
tsc && node index.js
```

## Example 📝

```
Welcome to the Currency Converter!
? From which currency do you want to convert? USD
? To which currency do you want to convert? PKR
? Enter the amount you want to convert: 100
Converted amount: 27875.00 PKR
? Do you want to perform another conversion? Yes
? From which currency do you want to convert? EUR
? To which currency do you want to convert? JPY
? Enter the amount you want to convert: 100
Converted amount: 15725.27 JPY
? Do you want to perform another conversion? No
Thank you for using the Currency Converter! Goodbye!
```
________________
## Conclusion 🎈
________________

This Currency Converter CLI application demonstrates a basic currency conversion system with a user-friendly interface, utilizing the inquirer and chalk packages to create an interactive and visually appealing experience. The application provides a range of features, including converting between multiple currencies and performing continuous conversions until the user decides to exit.
