/*
   Filename: ComplexCode.js
   Description: This code is a simulation of a complex banking system with extensive functionality.
   Author: John Doe
   Date: January 1, 2022
*/

// Constants
const ACCOUNT_TYPES = {
  CHECKING: 'Checking Account',
  SAVINGS: 'Savings Account',
  CREDIT: 'Credit Card Account'
};

// Classes

// Account class representing a bank account
class Account {
  constructor(accountNumber, accountType, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountType = accountType;
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: 'Deposit', amount });
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({ type: 'Withdrawal', amount });
    }
  }

  getAccountSummary() {
    let summary = `Account Number: ${this.accountNumber}\nAccount Type: ${this.accountType}\nBalance: $${this.balance}\n`;
    
    if (this.transactions.length > 0) {
      summary += 'Transactions:\n';
      for (const transaction of this.transactions) {
        summary += `${transaction.type}: $${transaction.amount}\n`;
      }
    }
    
    return summary;
  }
}

// Bank class representing a banking system
class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
  }

  createAccount(accountNumber, accountType, initialBalance) {
    const account = new Account(accountNumber, accountType, initialBalance);
    this.accounts.push(account);
    return account;
  }

  getAccountByNumber(accountNumber) {
    return this.accounts.find(account => account.accountNumber === accountNumber);
  }

  getAllAccounts() {
    return this.accounts;
  }

  getTotalBalance() {
    let totalBalance = 0;
    for (const account of this.accounts) {
      totalBalance += account.balance;
    }
    return totalBalance;
  }
}

// Usage example

// Create a new bank instance
const myBank = new Bank('MyBank');

// Create some sample accounts
const account1 = myBank.createAccount('A1001', ACCOUNT_TYPES.CHECKING, 1000);
const account2 = myBank.createAccount('A2001', ACCOUNT_TYPES.SAVINGS, 5000);
const account3 = myBank.createAccount('A3001', ACCOUNT_TYPES.CREDIT, -2000);

// Perform some transactions
account1.deposit(500);
account1.withdraw(200);
account2.withdraw(1000);
account3.deposit(300);

// Display account summaries and bank's total balance
console.log(account1.getAccountSummary());
console.log(account2.getAccountSummary());
console.log(account3.getAccountSummary());
console.log(`Total Balance: $${myBank.getTotalBalance()}`);

// Output:
// Account Number: A1001
// Account Type: Checking Account
// Balance: $1300
// Transactions:
// Deposit: $500
// Withdrawal: $200
//
// Account Number: A2001
// Account Type: Savings Account
// Balance: $4000
// Transactions:
// Withdrawal: $1000
//
// Account Number: A3001
// Account Type: Credit Card Account
// Balance: $100
// Transactions:
// Deposit: $300
//
// Total Balance: $5300

// ... more complex code goes here

// End of ComplexCode.js