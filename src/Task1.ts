// //Task 1: The "Optional" Shopping Cart EASY
// Concepts: Destructuring, Optional Properties, Default Values
// Scenario: You are building a checkout system. Users might buy one item by default,
// or specify a bulk quantity.

type CartItem = {
name: string;
price: number;
quantity?: number;
};

// Instructions:
// Write a function calculateTotal that takes a CartItem object.
// Use Destructuring to extract properties.
// If quantity is missing, ensure the calculation treats it as 1.
// Return the total cost (price * quantity).
// Hint: Set a default value during destructuring: { quantity = 1 } = item.

const calculateTotal = (item: CartItem) => {
    const {name, price, quantity = 1} = item;
    let totalCost = quantity * price;
    return totalCost;
}

const cartItem : CartItem = {
    name: 'chips',
    price: 40,
    quantity: 2
}

const result = calculateTotal(cartItem);
console.log(result);