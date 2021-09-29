/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let named = 'Stewart Rowley'

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = named

// Step 3: declare and instantiate a variable to hold the current year
let date = new Date();
let year = date.getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = year;

// Step 5: declare and instantiate a variable to hold the name of your picture
let family = 'images/stewart_rowley.jpg'

// Step 6: copy your image into the "images" folder


// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector('img').setAttribute('src', 'images/stewart_emily.jpg')
document.querySelector('img').setAttribute('alt', 'My Family')


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let food = ['Pork Chops','Ribs', 'Brisket'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = food.join(', ');


// Step 3: declare and instantiate a variable to hold another favorite food
food[1] ='Steak'

// Step 4: add the variable holding another favorite food to the favorite food array
document.querySelector('#food').textContent = food.join(', ');

// Step 5: repeat Step 2


// Step 6: remove the first element in the favorite foods array
food.shift();
document.querySelector('#food').textContent = food.join(', ');

// Step 7: repeat Step 2


// Step 8: remove the last element in the favorite foods array
food.pop();
document.querySelector('#food').textContent = food.join(', ');

// Step 7: repeat Step 2



