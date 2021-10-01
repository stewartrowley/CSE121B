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


// // example 1
// const steps = ['one', 'two', 'three'];
// // callback declaration
// function makeList(item) {
//   const listElement = document.getElementById('myList');
//   listElement.innerHTML += `<li>${item}</li>`;
// }
// steps.forEach(makeList);

// example 2
// is the luckyNumber in the list?
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
// let luckyIndex = -1;
myArray.forEach(function(item, index) {
  if(item === luckyNumber) {
    let luckyIndex = index;
    console.log(luckyIndex);
  }
});


// map Method
// example 1
const steps = ['one', 'two', 'three'];
const stepsHtml = steps.map(function(step) {
  return `<li>${step}</li>`;
});
document.getElementById('myList').innerHTML = stepsHtml.join(' ');

// example 2
const grades = ['A', 'B', 'A'];
function convertGradeToPoints(grade) {
  let points = 0;
  if(grade === 'A') {
    points = 4;
  } else if (grade === 'B') {
    points = 3;
  }
  return points;
}
// const gpaPoints = grades.map(convertGradeToPoints);


// reduce method

// example 1
// see map example for where the gpaPoints array came from...
const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function(total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;
console.log(gpa)

// example 2
// this is the same thing as above, but with an arrow function
// const pointsTotal = gpaPoints.reduce((total, item) => total + item);
// const gpa = pointsTotal / gpaPoints.length;

// this could be further simplified as
// const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;
      
//indexOf
  // improved luckyNumber
//   const myArray = [12, 34, 21, 54];
//   const luckyNumber = 21;
  let luckyIndex = myArray.indexOf(luckyNumber);
  console.log(luckyIndex)

//filter

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortWords = words.filter(function(word) {
  return word.length < 6;
});

// //same thing with an arrow function
// const shortWords = words.filter((word) => word.length < 6);

// Homework guide 

// Example 1
const nums = [1, 2, 3, 4];

// function getEvens(num) {
//     if (num % 2 === 0)
//     return num;
// };

// let even = nums.filter(getEvens);
// console.log(even);

// With Arrow function
let evens = nums.filter(num => num % 2 === 0);
console.log(evens);

// times number by 2

const buttonElement2 = document.querySelector('#submitButton');

// function multiply() {
//     const inputElement2 = document.querySelector('#inputBox');
//     const outputElement2 = document.querySelector('#outputBox');
//     let number inputElement2.value;
//     outputElement2.textContent = number * 2;
// }

// buttonElement2.addEventListener('click', multiply)






