/*
   Cart Functionality JavaScript for QuickMark Spaza Shop
   NQF Level 4 IT and Computer Science NCV Computer Programming ISAT
   
   This file contains all cart-related functionality including:
   - Adding items to cart with calculations
   - Updating quantities using loops
   - Removing items from cart
   - Calculating totals with basic math
   - Simple checkout process
   
   All functions use simple programming concepts like loops and basic calculations
*/

// ===== GLOBAL CART VARIABLE =====

// Simple cart array to store items - each item is an object with name, price, quantity, total
let cart = [];

// ===== CART MANAGEMENT FUNCTIONS =====

/**
 * Function to add item to cart
 * Uses basic calculations and demonstrates loops for finding existing items
 * @param {string} name - Product name
 * @param {number} price - Product price
 */
function addToCart(name, price) {
    // Check if item already exists in cart using for loop
    let existingItem = null;
    
    // Use for loop to search through cart array
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            existingItem = cart[i];
            break; // Exit loop when item found
        }
    }

    // If item exists, increase quantity, otherwise add new item
    if (existingItem) {
        existingItem.quantity += 1; // Simple addition
        existingItem.total = existingItem.quantity * existingItem.price; // Simple multiplication
    } else {
        // Create new cart item object
        cart.push({
            name: name,
            price: price,
            quantity: 1,
            total: price // Simple calculation: 1 * price = price
        });
    }

    // Update cart display after adding item
    displayCart();
    console.log(`Added ${name} to cart. Cart now has ${cart.length} different items.`);
}

/**
 * Function to remove item completely from cart
 * Uses for loop to find and remove item
 * @param {string} name - Product name to remove
 */
function removeFromCart(name) {
    // Use for loop to find and remove item
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            cart.splice(i, 1); // Remove item from array at position i
            break; // Exit loop after removing item
        }
    }
    
    // Update display after removal
    displayCart();
    console.log(`Removed ${name} from cart.`);
}

/**
 * Function to update quantity of an item
 * Demonstrates basic calculations and array manipulation
 * @param {string} name - Product name
 * @param {number} change - Amount to change quantity (+1 or -1)
 */
function updateQuantity(name, change) {
    // Find item using for loop
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            cart[i].quantity += change; // Simple addition or subtraction
            
            // Remove item if quantity becomes 0 or less
            if (cart[i].quantity <= 0) {
                cart.splice(i, 1); // Remove from array
            } else {
                // Recalculate total using simple multiplication
                cart[i].total = cart[i].quantity * cart[i].price;
            }
            break; // Exit loop after updating
        }
    }
    
    // Update display after quantity change
    displayCart();
}

// ===== CALCULATION FUNCTIONS =====

/**
 * Function to calculate cart totals
 * Uses for loop and basic calculations to sum up cart contents
 * @returns {object} - Object containing total items and total amount
 */
function calculateTotals() {
    let totalItems = 0;    // Counter for total number of items
    let totalAmount = 0;   // Counter for total monetary amount

    // Use for loop to go through each item in cart
    for (let i = 0; i < cart.length; i++) {
        totalItems += cart[i].quantity;  // Add quantity to total items (simple addition)
        totalAmount += cart[i].total;    // Add item total to overall total (simple addition)
    }

    // Return calculated totals as an object
    return {
        items: totalItems,
        amount: totalAmount.toFixed(2) // Round to 2 decimal places for currency
    };
}

// ===== DISPLAY FUNCTIONS =====

/**
 * Function to display cart contents on the page
 * Demonstrates loops and DOM manipulation
 */
function displayCart() {
    // Get HTML elements where cart will be displayed
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalContainer = document.getElementById('cartTotal');
    const emptyCartContainer = document.getElementById('emptyCart');

    // Clear existing content
    cartItemsContainer.innerHTML = '';

    // Check if cart is empty using simple if statement
    if (cart.length === 0) {
        // Show empty cart message, hide totals
        cartTotalContainer.style.display = 'none';
        emptyCartContainer.style.display = 'block';
        return; // Exit function early
    }

    // Hide empty cart message and show total section
    emptyCartContainer.style.display = 'none';
    cartTotalContainer.style.display = 'block';

    // Use for loop to display each cart item
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i]; // Get current item
        
        // Create HTML for cart item using template string
        const cartItemHTML = `
            <div class="cart-item">
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">R${item.price.toFixed(2)} each</div>
                </div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="updateQuantity('${item.name}', -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
                </div>
                <div>
                    <div class="item-price">R${item.total.toFixed(2)}</div>
                    <button class="remove-btn" onclick="removeFromCart('${item.name}')">Remove</button>
                </div>
            </div>
        `;
        
        // Add item HTML to container
        cartItemsContainer.innerHTML += cartItemHTML;
    }

    // Calculate and display totals using our calculation function
    const totals = calculateTotals();
    document.getElementById('totalItems').textContent = totals.items;
    document.getElementById('totalAmount').textContent = totals.amount;
}

// ===== UTILITY FUNCTIONS =====

/**
 * Function to clear entire cart
 * Simple array reset
 */
function clearCart() {
    cart = []; // Reset cart array to empty
    displayCart(); // Update display
    alert('Cart cleared!');
    console.log('Cart has been cleared.');
}

/**
 * Simple checkout function
 * Uses for loop to create summary and basic calculations
 */
function checkout() {
    // Check if cart is empty
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Calculate totals for checkout
    const totals = calculateTotals();
    let message = `Checkout Summary:\n\n`;
    
    // Use for loop to create detailed checkout summary
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        message += `${item.name} x${item.quantity} = R${item.total.toFixed(2)}\n`;
    }
    
    // Add total information
    message += `\nTotal Items: ${totals.items}`;
    message += `\nTotal Amount: R${totals.amount}`;
    message += `\n\nThank you for shopping at QuickMark Spaza!`;
    message += `\nYour order will be ready for collection.`;
    
    // Show checkout summary
    alert(message);
    
    // Clear cart after successful checkout
    cart = [];
    displayCart();
    
    console.log('Checkout completed successfully.');
}

// ===== INITIALIZATION =====

/**
 * Function that runs when cart page loads
 * Sets up the cart display
 */
function initializeCart() {
    displayCart(); // Show current cart contents
    console.log('Cart page loaded successfully');
    console.log(`Current cart has ${cart.length} different items`);
}

// ===== EVENT LISTENERS =====

// Initialize cart when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeCart();
});
