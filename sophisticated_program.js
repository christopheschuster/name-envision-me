/*
* Filename: sophisticated_program.js
* Description: This code is a sophisticated program that simulates a virtual banking system
* Author: [Your Name]
* Date: [Current Date]
*/

// Utility functions to generate random values
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateAccountNumber() {
    let accountNumber = "";
    for (let i = 0; i < 10; i++) {
        accountNumber += getRandomInt(0, 9);
    }
    return accountNumber;
}

// Class representing a bank account
class BankAccount {
    constructor(firstName, lastName, initialDeposit) {
        this.accountNumber = generateAccountNumber();
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = initialDeposit;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be positive");
        } else {
            this.balance += amount;
            console.log(`Successfully deposited ${amount} into Account ${this.accountNumber}`);
        }
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be positive");
        } else if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Successfully withdrew ${amount} from Account ${this.accountNumber}`);
        }
    }

    getBalance() {
        console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
    }
}

// Create an array to hold bank accounts
let bankAccounts = [];

// Generate 5 random bank accounts
for (let i = 0; i < 5; i++) {
    let firstName = `First${i + 1}`;
    let lastName = `Last${i + 1}`;
    let initialDeposit = getRandomInt(1000, 5000);
    let account = new BankAccount(firstName, lastName, initialDeposit);
    bankAccounts.push(account);
}

// Perform transactions on the bank accounts
for (let i = 0; i < bankAccounts.length; i++) {
    let account = bankAccounts[i];
    console.log(`--- Account ${account.accountNumber} ---`);
    account.getBalance();
    account.deposit(getRandomInt(100, 500));
    account.withdraw(getRandomInt(100, 500));
    account.getBalance();
    console.log();
}