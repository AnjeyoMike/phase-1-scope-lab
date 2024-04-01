// Write your solution in this file!
var customerName = 'bob';

// Write a function that accesses the global customerName variable and uppercases it.
function upperCaseCustomerName() {
    return customerName.toUpperCase();
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
    bestCustomer = 'not bob'; // Implicit global variable (not recommended)
}

// Write a new function called overwriteBestCustomer() that changes the bestCustomer variable to 'maybe bob'.
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare a constant (using the const keyword) in global scope called leastFavoriteCustomer and assign it some initial value.
const leastFavoriteCustomer = 'someone';

// Write a function called changeLeastFavoriteCustomer() that attempts to change the leastFavoriteCustomer constant.
function changeLeastFavoriteCustomer() {
    // This will throw an error because you can't reassign a constant
    leastFavoriteCustomer = 'someone else';
}

