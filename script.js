/*
   JavaScript File for QuickMark Spaza Shop Website
   NQF Level 4 IT and Computer Science NCV Computer Programming ISAT
   
   This file contains all interactive functionality for the website including:
   - Form validation
   - Product search and filtering
   - Modal windows
   - Interactive elements
   
   All functions include detailed comments explaining their purpose and logic
*/

// ===== GLOBAL VARIABLES =====

// Store original product data for search functionality
let originalProducts = [];

// ===== HOMEPAGE FUNCTIONS =====

/**
 * Function to show welcome message when user clicks "Learn More" button
 * This demonstrates basic JavaScript interaction with DOM elements
 */
function showWelcomeMessage() {
    // Display an alert message to the user
    alert("Welcome to QuickMark Spaza! We've been proudly serving the Soweto community since 2018. Visit us today for all your grocery needs!");
    
    // Optional: Change the hero image after showing message
    const heroImg = document.getElementById('heroImg');
    if (heroImg) {
        // You could change the image source here if you have multiple images
        console.log("Welcome message displayed successfully");
    }
}

/**
 * Function to show product information when user clicks on product cards
 * @param {string} productName - Name of the product clicked
 */
function showProductInfo(productName) {
    // Create a simple alert with product information
    let message = "";
    
    // Switch statement to provide different information based on product
    switch(productName) {
        case 'Maize Meal':
            message = "Maize Meal (2.5kg) - R25.99\n\nPremium white maize meal, perfect for making pap and other traditional dishes. Always fresh and of the highest quality.";
            break;
        case 'Fresh Bread':
            message = "Fresh Bread - R12.50\n\nDaily fresh white bread delivered from our local bakery partner. Soft, fluffy, and perfect for sandwiches or toast.";
            break;
        case 'Cool Drinks':
            message = "Cool Drinks - R15.00\n\nRefreshing beverages including Coca Cola, Fanta, and Sprite. Always served ice-cold for your enjoyment.";
            break;
        case 'Soap & Toiletries':
            message = "Soap & Toiletries - R8.99\n\nPersonal care items including bath soap, toothpaste, and other essentials for your daily hygiene needs.";
            break;
        default:
            message = "Product information not available. Please visit our store or contact us for more details.";
    }
    
    // Display the product information
    alert(message);
}

// ===== ABOUT PAGE FUNCTIONS =====

/**
 * Function to toggle additional story details on About page
 * This demonstrates show/hide functionality using JavaScript
 */
function toggleStoryDetails(buttonElement) {
    // Get the hidden details element
    const storyDetails = document.getElementById('story-details');
    const button = buttonElement || document.querySelector('.info-button'); // Get the button that was clicked

    // Check if element exists (defensive programming)
    if (storyDetails && button) {
        // Toggle the visibility of the details
        if (storyDetails.classList.contains('hidden')) {
            // Show the details
            storyDetails.classList.remove('hidden');
            button.textContent = 'Read Less'; // Change button text
        } else {
            // Hide the details
            storyDetails.classList.add('hidden');
            button.textContent = 'Read More'; // Change button text back
        }
    }
}

/**
 * Function to highlight achievement items when clicked
 * @param {HTMLElement} element - The achievement item that was clicked
 */
function highlightAchievement(element) {
    // Remove highlight from all achievement items first
    const allAchievements = document.querySelectorAll('.achievement-item');
    allAchievements.forEach(item => {
        item.classList.remove('highlighted');
    });
    
    // Add highlight to the clicked item
    element.classList.add('highlighted');
    
    // Optional: Show additional information based on the achievement
    const achievementText = element.querySelector('h4').textContent;
    console.log(`Achievement highlighted: ${achievementText}`);
}

// ===== PRODUCTS PAGE FUNCTIONS =====

/**
 * Function to search products based on user input
 * This demonstrates string manipulation and DOM filtering
 */
function searchProducts() {
    // Get the search input value and convert to lowercase for case-insensitive search
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    // Get all product items
    const productItems = document.querySelectorAll('.product-item');
    
    // Loop through each product item
    productItems.forEach(item => {
        // Get the product name from the data attribute
        const productName = item.getAttribute('data-name').toLowerCase();
        
        // Check if the search term is found in the product name
        if (productName.includes(searchTerm)) {
            // Show the product (remove hidden class if it exists)
            item.style.display = 'block';
        } else {
            // Hide the product
            item.style.display = 'none';
        }
    });
    
    // Log search activity for debugging
    console.log(`Searching for: ${searchTerm}`);
}

/**
 * Function to filter products by category
 * @param {string} category - The category to filter by ('all', 'groceries', 'drinks', etc.)
 * @param {HTMLElement} buttonElement - The button element that was clicked
 */
function filterProducts(category, buttonElement) {
    // Get all product categories
    const productCategories = document.querySelectorAll('.product-category');

    // Get all filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Remove active class from all buttons
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to clicked button
    if (buttonElement) {
        buttonElement.classList.add('active');
    }

    // Show/hide categories based on filter
    productCategories.forEach(categoryDiv => {
        const categoryName = categoryDiv.getAttribute('data-category');

        if (category === 'all' || categoryName === category) {
            categoryDiv.style.display = 'block';
        } else {
            categoryDiv.style.display = 'none';
        }
    });

    // Clear search input when filtering
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }

    // Log filter activity
    console.log(`Filtering by category: ${category}`);
}

/**
 * Function to show detailed product information in a modal
 * @param {string} name - Product name
 * @param {string} price - Product price
 * @param {string} description - Product description
 */
function showProductDetails(name, price, description) {
    // Get modal elements
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');

    // Check if all elements exist
    if (modal && modalTitle && modalPrice && modalDescription) {
        // Set modal content
        modalTitle.textContent = name;
        modalPrice.textContent = price;
        modalDescription.textContent = description;

        // Show the modal with a slight delay to ensure smooth animation
        modal.classList.remove('hidden');

        // Focus on the modal for accessibility
        modal.focus();

        // Prevent body scrolling when modal is open
        document.body.style.overflow = 'hidden';

        console.log(`Product modal opened for: ${name}`);
    } else {
        console.error('Modal elements not found');
    }
}

/**
 * Function to close the product details modal
 */
function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        // Hide the modal
        modal.classList.add('hidden');

        // Restore body scrolling
        document.body.style.overflow = '';

        console.log('Product modal closed');
    } else {
        console.error('Modal element not found');
    }
}

// ===== CONTACT PAGE FUNCTIONS =====

/**
 * Function to validate and submit the contact form
 * This demonstrates comprehensive form validation
 * @param {Event} event - The form submission event
 * @returns {boolean} - Returns false to prevent actual form submission
 */
function validateAndSubmitForm(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get form elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    
    // Clear previous error messages
    clearErrorMessages();
    
    // Validation flag
    let isValid = true;
    
    // Validate name (required, minimum 2 characters)
    if (name === '') {
        showError('nameError', 'Name is required');
        isValid = false;
    } else if (name.length < 2) {
        showError('nameError', 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    // Validate email (required, must be valid email format)
    if (email === '') {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate phone (optional, but if provided must be valid format)
    if (phone !== '' && !isValidPhone(phone)) {
        showError('phoneError', 'Please enter a valid phone number');
        isValid = false;
    }
    
    // Validate subject (required)
    if (subject === '') {
        showError('subjectError', 'Please select a subject');
        isValid = false;
    }
    
    // Validate message (required, minimum 10 characters)
    if (message === '') {
        showError('messageError', 'Message is required');
        isValid = false;
    } else if (message.length < 10) {
        showError('messageError', 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    // If all validation passes
    if (isValid) {
        // Hide the form and show success message
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('successMessage').classList.remove('hidden');
        
        // Log form submission (in real application, this would send data to server)
        console.log('Form submitted successfully:', {
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message
        });
    }
    
    // Return false to prevent actual form submission
    return false;
}

/**
 * Helper function to display error messages
 * @param {string} errorElementId - ID of the error message element
 * @param {string} message - Error message to display
 */
function showError(errorElementId, message) {
    const errorElement = document.getElementById(errorElementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

/**
 * Helper function to clear all error messages
 */
function clearErrorMessages() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

/**
 * Helper function to validate email format using regular expression
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if email is valid, false otherwise
 */
function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Helper function to validate phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if phone is valid, false otherwise
 */
function isValidPhone(phone) {
    // Regular expression for South African phone numbers
    // Accepts formats like: 011-123-4567, 0111234567, +27111234567
    const phoneRegex = /^(\+27|0)[0-9]{9,10}$|^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    return phoneRegex.test(phone.replace(/\s/g, '')); // Remove spaces before testing
}

/**
 * Function to clear the contact form
 */
function clearForm() {
    // Get the form element
    const form = document.getElementById('contactForm');
    
    // Reset all form fields
    if (form) {
        form.reset();
        
        // Clear any error messages
        clearErrorMessages();
        
        // Show confirmation
        alert('Form cleared successfully!');
    }
}

/**
 * Function to show directions (placeholder functionality)
 */
function showDirections() {
    alert('Directions to QuickMark Spaza:\n\n1. From Johannesburg CBD, take the M70 towards Soweto\n2. Turn left onto Main Street\n3. We are located at 123 Main Street\n\nFor GPS navigation, use coordinates: -26.2678, 27.8546');
}

// ===== EVENT LISTENERS AND INITIALIZATION =====

/**
 * Function that runs when the page loads
 * This sets up any necessary event listeners and initializations
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('QuickMark Spaza website loaded successfully');

    // Add click event listener to close modal when clicking outside of it
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeProductModal();
            }
        });

        // Add keyboard event listener for ESC key to close modal
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeProductModal();
            }
        });
    }

    // Add enter key support for search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                searchProducts();
            }
        });
    }

    // Add event listeners for filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            filterProducts(category, this);
        });
    });

    // Initialize any other components as needed
    console.log('All interactive components initialized');
});
