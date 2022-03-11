// this is the main JS file for module 4 in DGM 2760 2022 spring, mark lund

// fill text of header h1
document.querySelector('header > h1').innerText = "Fortune Teller"
// fill text of header h2
document.querySelector('header > h2').innerText = "Switch Statements"

// random number generation function - blatant MDN copy
function getRandomIntInRange(minInt, maxInt) {
    // smooth things out
    minInt = Math.ceil(minInt)
    maxInt = Math.floor(maxInt)

    // mdn wizardry
    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt
}

// get a num for the month
let monthNum = getRandomIntInRange(1, 12)

function getMonthName(monthNum) {
    let currentMonth // define variable
    // figure out what text value we should assign to it
    // shouldnt there be a more compact way to do this?
    switch (key) {
        case 1:
            currentMonth = "January"
            break;
        case 2:
            currentMonth = "February"
            break;
        case 3:
            currentMonth = "March"
            break;
        case 4:
            currentMonth = "April"
            break;
        case 5:
            currentMonth = "May"
            break;
        case 6:
            currentMonth = "June"
            break;
        case 7:
            currentMonth = "July"
            break;
        case 8:
            currentMonth = "August"
            break;
        case 9:
            currentMonth = "September"
            break;
        case 10:
            currentMonth = "October"
            break;
        case 11:
            currentMonth = "November"
            break;
        case 12:
            currentMonth = "December"
            break;
        default:
            currentMonth = "UndefinedMonth"
            break;
    }
    // return the month
    return currentMonth
}

function getFortune(fortNum) {
    let fortune
    switch(fortNum) {
        case 1:
            fortune = 'Finally wake up, discovering that your whole life has been a dream.'
            break;
        case 2:
            fortune = 'Pass by a hooded stranger as you commute. Their presence will remain with you throughout the day, although you will not realize why until much later.'
            break;
        case 3:
            fortune = 'Lose a very precious item, only to locate a much more valuable one that same day.'
            break;
        case 4:
            fortune = 'Lie in bed, frozen by the weight of your inadequacies.'
            break;
        case 5:
            fortune = 'Encounter a long-buried memory as you sort through your jumbled belongings.'
            break;
        default:
            fortune = "something went wrong lul"
            break;
    }
}
