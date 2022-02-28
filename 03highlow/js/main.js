// this is the main JS file for module 3 in DGM 2760 2022 spring, mark lund

// fill text of header h1
document.querySelector('header > h1').innerText = "Guessing Game"
// fill text of header h2
document.querySelector('header > h2').innerText = "JavaScript Logic"

// generate a random int between 0 and 16 (includes 1 and 15 but not 0 and 16)
const correctNumber = Math.ceil(Math.random() * 15) // this works, since 0-1 values turn into 0 and 14-15 values turn into 15
// send to console
console.log(`Correct Number ${correctNumber}`)

// they havent won yet
let userWins = false
// how many total guesses
let guessTotal = 0
// what did they guess
let currentGuess = 0






function checkGuess() {
    // console.log('button clicked')
    guessTotal++
    currentGuess = document.querySelector('#guesser').value // what they put in

    const response = document.querySelector('#feedback') // 
}
