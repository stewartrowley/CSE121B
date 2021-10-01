/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

function add(number1, number2) {
    addSum = (parseInt(number1) + parseInt(number2))
    return (addSum);
};

function addNumbers() {
    let num1 = document.querySelector('#addend1').value;
    let num2 = document.querySelector('#addend2').value;
    let total = add(num1, num2);
    document.querySelector('#sum').value = total;
};

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
let subtract = function(numbers1, numbers2) {
    subtotal = (parseInt(numbers1) - parseInt(numbers2));
    return (subtotal);
};

let subtractNumnbers = function() {
    let number1 = document.querySelector('#minuend').value;
    let number2 = document.querySelector('#subtrahend').value;
    let total_differ = subtract(number1,  number2);
    document.querySelector('#difference').value = total_differ;
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumnbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

let multiply = (no1, no2) => {
    return(no1 * no2);
};


let multiplyNumbers =  () => {
    let no1 = document.querySelector('#factor1').value;
    let no2 = document.querySelector('#factor2').value;
    let total_mult = multiply(no1, no2);
    document.querySelector('#product').value = total_mult;
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

// Step 9: Test all of the mathematical functionality of the task3.html page.
let divide = (no3, no4) => {
    return (parseFloat(no3) / parseFloat(no4));
};

let divideNumbers = () => {
    let no3 = document.querySelector('#dividend').value;
    let no4 = document.querySelector('#divisor').value;
    let total_divide = divide(no3, no4);
    document.querySelector('#quotient').value = total_divide;
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
// Step 4: Assign the current year variable to an HTML form element with an ID of year

let date = new Date();
let year = date.getFullYear();
document.querySelector('#year').textContent = year 


/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
meArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
            13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
            23, 24, 25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').textContent = meArray;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let odds = meArray.filter(meArray => meArray % 2 === 1);
document.querySelector('#odds').textContent = odds;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evens = meArray.filter(meArray => meArray % 2 === 0);
document.querySelector('#evens').textContent = evens;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let array = meArray.reduce((number, outcome) => number + outcome, 0);
document.querySelector('#sumOfArray').textContent = array;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
let mapArray = meArray.map(x => x * 2);
document.querySelector('#multiplied').textContent = mapArray;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let mapArrayTwo = meArray.map(x => x * 2).reduce((number, outcome) => number + outcome, 0);
document.querySelector('#sumOfMultiplied').textContent = mapArrayTwo;