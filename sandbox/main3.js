show();

// Declaration - can be hoisted(called before declared.)

function show() {
    console.log('This is output for developer');
};

function addIt(n1, n2) { // two parameters
    return(n1 + n2);
};
let one = 7 // a variable declared and assigned 
let two = 8 // a variable declared and assigned 
console.log(addIt(one, two)); // func called and sent to console

document.querySelector('#result').textContent = addIt(one, two);
// func called and sent to documnet.

// Expression -- cannot be hoisted(no call to it before.)

let add = function(num1, num2) {
    return(num1 + num2);
};

document.querySelector('#result').textContent = add(4, 4);

// ARROW -- eficient syntax, but no hoisting(no call to it before.)

let sum = (no1, no2) => {
    return(no1, no2);
};

document.querySelector('#result').textContent = add(one, two);

//EVENTS
const buttonElement = document.getElementById('submitButton');

// function copyInput() {
//     const inputElement = document.getElementById('inputBox');
//     const outputElement = document.getElementById('output');
//     outputElement.innerHTML = inputElement.value;
// }

buttonElement.addEventListener('click', copyInput);

// Event Object
// modify the copyInput callback to receive the event object
function copyInput(event) {
    // take a look at the event!
    console.log(event.target)
    const inputElement = document.getElementById('inputBox');
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = inputElement.value;
}


// example 1
const steps = ['one', 'two', 'three'];
// callback declaration
function makeList(item) {
  const listElement = document.getElementById('myList');
  listElement.innerHTML += `<li>${item}</li>`;
}
steps.forEach(makeList);


