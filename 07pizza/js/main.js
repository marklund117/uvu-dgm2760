// this is the main JS file for module 7 in DGM 2760 2022 spring, mark lund

// message for later
let message

// fill text of header h1
document.querySelector('header > h1').textContent = "Pizza Parlor"
// fill text of header h2
document.querySelector('header > h2').textContent = "Object Literals"

// lets create a pizza object literal with properties and methods
const pizza = {
    // define the initial properties of the object literal
    crust: 'Garlic and Herb',
    topping: 'Pineapple',
    size: 'Small',
    // now lets add a method
    buildPizza: function () {
        console.log('buildPizza method called')
        // compose the message including current values
        message = `Thanks for your order of one ${pizza.size} pizza with ${pizza.crust} crust topped with ${pizza.topping}.`
        // tell the user what kind of pizza is being made
        document.querySelector('#output').textContent = message
    },
    // the second method will list ingredients required
    ingredientList: function () {
        console.log('ingredientList function called')
        if (pizza.crust == 'Garlic and Herb') { // i had a single = here for a while and got confused, never use assignment in an IF lol
            console.log('if')
            message = `You must buy Cheese, Sauce, and ${pizza.crust}s along with some ${pizza.topping} and a ${pizza.size} amount of Dough.`
        } else {
            console.log('else')
            message = `You must buy Cheese, Sauce, and some ${pizza.topping} and a ${pizza.size} amount of Dough.`
        }
        // now show the message
        document.querySelector('#output').textContent = message
    }
}

// what happens when the garlicandherb button is clicked
document.querySelector('#garlicandherb').addEventListener('click', () => pizza.crust = 'Garlic and Herb')
// what happens when the plain button is clicked
document.querySelector('#plain').addEventListener('click', () => pizza.crust = 'Plain')

// what happens when the pineapple button is clicked
document.querySelector('#pineapple').addEventListener('click', () => pizza.topping = 'Pineapple')
// what happens when the mushroom button is clicked
document.querySelector('#mushroom').addEventListener('click', () => pizza.topping = 'Mushrooms')

// what happens when the small button is clicked
document.querySelector('#small').addEventListener('click', () => pizza.size = 'Small')
// what happens when the large button is clicked
document.querySelector('#large').addEventListener('click', () => pizza.size = 'Large')

// enable the buildpizza button
document.querySelector('#buildbutton').addEventListener('click', pizza.buildPizza)

// enable the shopping list button
document.querySelector('#listbutton').addEventListener('click', pizza.ingredientList)


