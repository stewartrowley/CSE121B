console.log(typeof 42);                  
console.log(typeof "abc");           
console.log(typeof true);             
console.log(typeof undefined);      
console.log(typeof null);             
console.log(typeof { "a": 1 });       
console.log(typeof [1,2,3]);         
console.log(typeof function hello(){});  


// Use let for declaring a variable.
// var adult = true;
let adult = true;
let age = 23;
const PROFFESSION = 'student';

if (adult) {
    var myName = "Stewart";
}

console.log(myName);

console.log(age);

console.log(PROFFESSION);

// turning a string into a number
adult = Number('6') + 3;

console.log(adult);
// alert(adult) - alerts the user.

document.getElementById('p2').textContent = 'Hello World'
document.querySelector('#p2').textContent = 'Time is limited'
document.querySelector('.p3').textContent = 'This is my life'
document.querySelector('.p3').innerText = 'Time is of the essence'

// the second paragraph
// document.querySelector('p')[1].innerText = 'Time is precious';

// document.querySelector('#p2').innerHTML = '<h1>My name text</h1>';

let date = new Date();
let year = date.getFullYear();

console.log(year);

document.querySelector('h1').innerHTML = '<p>'+ year +'</p>'

const newdiv = document.querySelector('#course');

const newParagraph = document.createElement('p'); //1. create element
newParagraph.textContent = 'Added with JS'; //2. Give it come content 
newdiv.appendChild(newParagraph); //3. add it to the page

document.querySelector('img').setAttribute('src', 'images/stewart_emily.jpg')
document.querySelector('img').setAttribute('alt', 'My Family')
document.querySelector('img').setAttribute('width', '200')

let classes = ['CSE121B','CIT111', 'WDD230'];
console.log(classes)

document.querySelector('#course').textContent = classes.join(' ');

classes[1] ='CSE210' // assign a new variable
document.querySelector('#course').textContent = classes.join(' ');

classes.push('WDD230'); // add to end of array
document.querySelector('#course').textContent = classes.join(' ');

classes.shift(); //takes off the beginning
document.querySelector('#course').textContent = classes.join(' ');

classes.splice(1,2); //specific starting at index 1 taking away 2 items
document.querySelector('#course').textContent = classes.join(' ');

classes.push('WDD330');
document.querySelector('#course').textContent = classes.join(' ');

classes.pop();// takes away  from the end of the array
document.querySelector('#course').textContent = classes.join(' ');







