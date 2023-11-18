The code below is a complex example that simulates a virtual bookstore. It includes various features such as adding books to a cart, removing books from the cart, calculating the total price, and checking out. Please note that due to character limitations, the code will be truncated.

```javascript
// virtual_bookstore.js

// Book class representing a book with title, author, and price
class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
}

// ShoppingCart class implementing the bookstore functionalities
class ShoppingCart {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Added ${book.title} to the cart.`);
  }

  removeBook(title) {
    const index = this.books.findIndex((book) => book.title === title);
    if (index !== -1) {
      const removedBook = this.books.splice(index, 1);
      console.log(`Removed ${removedBook[0].title} from the cart.`);
    } else {
      console.log(`Book with title ${title} not found in the cart.`);
    }
  }

  getTotalPrice() {
    return this.books.reduce((total, book) => total + book.price, 0);
  }

  checkout() {
    const totalPrice = this.getTotalPrice();
    console.log(`Total price: $${totalPrice.toFixed(2)}`);
    console.log('Checking out...');
    // Place checkout process here, e.g., payment, updating inventory, etc.
    console.log('Checkout successful!');
  }
}

// Usage example
const cart = new ShoppingCart();

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 15.99);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 12.49);
const book3 = new Book('1984', 'George Orwell', 10.99);

cart.addBook(book1);
cart.addBook(book2);
cart.addBook(book3);

cart.removeBook('To Kill a Mockingbird');

console.log(`Total price in the cart: $${cart.getTotalPrice().toFixed(2)}`);

cart.checkout();
```

Note: This code example represents a basic implementation and may require additional functionalities and error handling depending on real-world use cases.