/* sophisticated_code.js */

// This code demonstrates a complex implementation of a shopping cart for an e-commerce website.
// It includes features like adding, removing, and updating items, calculating total price, and managing inventory.

class ShoppingCart {
  constructor() {
    this.items = [];
    this.inventory = new Map();
    this.discountApplied = false;
  }

  addItem(item, quantity) {
    if (this.inventory.get(item)) {
      if (this.inventory.get(item) >= quantity) {
        this.items.push({ item, quantity });
        this.inventory.set(item, this.inventory.get(item) - quantity);
        console.log(`${quantity} ${item}(s) added to the cart.`);
      } else {
        console.log(`Not enough stock for ${quantity} ${item}(s).`);
      }
    } else {
      console.log(`No stock available for ${item}.`);
    }
  }

  removeItem(item) {
    const index = this.items.findIndex((cartItem) => cartItem.item === item);
    if (index >= 0) {
      this.inventory.set(item, this.inventory.get(item) + this.items[index].quantity);
      this.items.splice(index, 1);
      console.log(`${item} removed from the cart.`);
    } else {
      console.log(`${item} is not in the cart.`);
    }
  }

  updateQuantity(item, newQuantity) {
    const index = this.items.findIndex((cartItem) => cartItem.item === item);
    if (index >= 0) {
      const oldQuantity = this.items[index].quantity;
      const diff = newQuantity - oldQuantity;
      if (this.inventory.get(item) >= diff) {
        this.items[index].quantity = newQuantity;
        this.inventory.set(item, this.inventory.get(item) - diff);
        console.log(`${item}'s quantity updated to ${newQuantity}.`);
      } else {
        console.log(`Not enough stock for ${diff > 0 ? 'increasing' : 'decreasing'} ${item}'s quantity.`);
      }
    } else {
      console.log(`${item} is not in the cart.`);
    }
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    for (const { item, quantity } of this.items) {
      totalPrice += this.inventory.get(item) * quantity;
    }
    return this.discountApplied ? totalPrice * 0.9 : totalPrice;
  }

  applyDiscount() {
    if (!this.discountApplied) {
      this.discountApplied = true;
      console.log('Discount applied to the total price.');
    } else {
      console.log('Discount has already been applied.');
    }
  }
}

// Usage example:

const cart = new ShoppingCart();

cart.addItem('Product A', 2);
cart.addItem('Product B', 1);
cart.applyDiscount();
cart.removeItem('Product A');
cart.updateQuantity('Product B', 3);

console.log('Total Price:', cart.calculateTotalPrice());