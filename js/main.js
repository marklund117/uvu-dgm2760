// This is the main javascript file for DGM 2760 assignment 1 Joes BNB by Mark Lund
// created 30 Jan 2022

// (old method) get the element with ID 'company' and assign it's inner HTML to the value of
// the string "Joes Bed and Breakfast"

//document.getElementById('company').innerHTML = "Joe's  Bed and Breakfast";


// new method: query, look for the h1 within the header and assign it's innertext
// to the value of a string
document.querySelector('header > h1').innerText = "Joe's Bed and Breakfast";

// and do the same with the h2
document.querySelector('header > h2').innerText = "Wakin up to Bacon";

// and pagename
document.querySelector('#pagename').innerText = "Welcome to Joe's B&B!";

// let's use the built in prompt
// this will create a browser popup that asks for the user's name
let userName = prompt("Please provide your name.");

// string concat method (old way)
// let message = "Hello " + userName + ", welcome to the best source of pancakes in the galaxy!";

//fancy new es6 template method
let message = `Hello ${userName}, welcome to the best source of pancakes in the galaxy!`;

//we can use a # in a queryselector to search for a specific ID
document.querySelector('#hellothere').innerText = message;


