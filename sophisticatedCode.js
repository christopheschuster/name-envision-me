/*** 
 * Filename: sophisticatedCode.js
 * Description: Complex and elaborate JavaScript code demonstrating advanced functionality
 * Author: AI Developer
 * Date: 2022-09-30
 */

// Define a class named "Person"
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to calculate the birth year based on the current age
  calculateBirthYear() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }
}

// Create instances of the Person class
const person1 = new Person("John Doe", 30);
const person2 = new Person("Jane Smith", 25);

// Define a function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Define an object that represents a car
const car = {
  make: "Tesla",
  model: "Model S",
  year: 2022,
  color: "white",
  features: ["Autopilot", "Electric Engine"],
  start: function() {
    console.log(`Starting ${this.make} ${this.model}`);
  },
  stop: function() {
    console.log(`Stopping ${this.make} ${this.model}`);
  }
};

// Define an array of numbers and find the sum
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// Define a recursive function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Define a higher-order function that returns a function
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

// Use a ternary operator to check if a number is even or odd
const number = 7;
const isEven = number % 2 === 0 ? true : false;

// Define a generator function to generate Fibonacci sequence
function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Use the generator function to get the first 10 Fibonacci numbers
const fibonacciGenerator = fibonacci();
const fibonacciNumbers = [];
for (let i = 0; i < 10; i++) {
  fibonacciNumbers.push(fibonacciGenerator.next().value);
}

// Define an async function to fetch data from an API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// Call the fetchData function with a sample API url
fetchData("https://api.example.com/data")
  .then(data => {
    console.log("Data:", data);
  })
  .catch(error => {
    console.log("Something went wrong...");
  });

// Define a closure to create private variables and functions
function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
    },
    decrement: function() {
      count--;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();

// Execute and print the result of the complex code
console.log("Person 1:", person1);
console.log("Person 2:", person2);
console.log("Sum of numbers:", sum);
console.log("Factorial of 5:", factorial(5));
console.log("Double of 10:", double(10));
console.log("Triple of 10:", triple(10));
console.log("Is 7 even?", isEven);
console.log("First 10 Fibonacci numbers:", fibonacciNumbers);
console.log("Count:", counter.getCount());
counter.increment();
console.log("Count after increment:", counter.getCount());
counter.decrement();
console.log("Count after decrement:", counter.getCount());