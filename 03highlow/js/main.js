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

    guessTotal++ // add 1 to tries
    const visibletries = document.querySelector('#tries') // easy way to modify

    currentGuess = document.querySelector('#guesser').value // what they put in

    const response = document.querySelector('#tellthem') // make it easy to access

    if (currentGuess <= 15 && currentGuess >= 1) { // check to make sure the guess is within the rules

        // if the guess is in range...
        if (currentGuess == correctNumber) { // abstract equality, auto converts str
            // here's what happens when they win
            response.innerText = "You Win!"
            console.log("you win gg")
            giveRibbon(guessTotal) // give em a ribbon with total guesses in mind
        } else if (currentGuess > correctNumber ) { // if too high...
            console.log("too high")
            response.innerText = "Too high, try again."
        } else if (currentGuess < correctNumber) { // if too low....
            console.log("too low")
            response.innerText = "Too low, try again."
        }

    // ok but what if the guess is not in range    
    } else {
        console.log("out of range")
        response.innerText = "Out of range, guess an integer between 1 and 15."
        guessTotal-- // don't count out of range guesses
    }
    if (guessTotal > 0) {visibletries.innerText = guessTotal} // display try count, only if not 0
}

function giveRibbon (guesses) { // take in a parameter to be a little more general purpose

    const awardImage = document.createElement('img') // create an img element
    const ribbondiv = document.querySelector('#ribbonpic') // grab the div
    

    switch (guesses) { // honestly i'd rather use if/else than switch but might as well
        case 1:
        case 2:
        case 3:
            console.log("blueribbon event") // for 1-3 guesses
            awardImage.setAttribute('src', 'images/bluerib.png') // set to the blue ribbon
            break;
        case 4:
        case 5:
        case 6:
            console.log("redribbon event") // for 4-6
            awardImage.setAttribute('src', 'images/redrib.png') // set to the red ribbon
            break;
        default:
            console.log("yellowribbon event") // for 7+
            awardImage.setAttribute('src', 'images/yellowrib.png') // set to the yellow ribbon
            break;
    }

if (ribbondiv.childElementCount == 0) {ribbondiv.appendChild(awardImage)} // add it to the div, only if theres not already one

}
