// this is the main JS file for module 8 in DGM 2760 2022 spring, mark lund

// fill text of header h1
document.querySelector('header > h1').textContent = "Ancient Tomb"
// fill text of header h2
document.querySelector('header > h2').textContent = "Object Literals"

// now we need to create an object
const question = {
    // properties
    stem: "What is hidden in the Ancient Tomb?",
    option1: "Gold",
    option2: "Jewels",
    option3: "Scrolls",
    option4: "Mummies",
    correct: 2,
    // methods
    // display question method
    display: () => {
        document.querySelector('#stem').textContent = question.stem
        document.querySelector('#button1').textContent = question.option1
        document.querySelector('#button2').textContent = question.option2
        document.querySelector('#button3').textContent = question.option3
        document.querySelector('#button4').textContent = question.option4  
    },
    // check if they answered correctly
    check: (userChoice) => {
        if (userChoice === question.correct) {
            // if they guessed right
            document.querySelector(".feedback").textContent = "You are correct!"
        } else {
            // if they guessed wrong
            document.querySelector(".feedback").textContent = "Incorrect. Try again."
        }
    }
}

// listen for click on each button, then check
document.querySelector('#button1').addEventListener('click', () => question.check(1))
document.querySelector('#button2').addEventListener('click', () => question.check(2))
document.querySelector('#button3').addEventListener('click', () => question.check(3))
document.querySelector('#button4').addEventListener('click', () => question.check(4))

// display question on page load
question.display()



