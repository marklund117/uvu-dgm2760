// this is the main JS file for module 8 in DGM 2760 2022 spring, mark lund

// fill text of header h1
document.querySelector('header > h1').textContent = "Hotel Booking"
// fill text of header h2
document.querySelector('header > h2').textContent = "Complete with tiny shampoo bottles"

// time to access the JSON with Fetch
//async function - this could be made even more general by passing in a URL 
async function getHotelData() {
    try {
        const response = await fetch('https://marklund2760.netlify.app/10hotel/hotel.json') // await the result of the fetch call (NEW URL)
        return await response.json() // await converting the response to JSON instead of giving us everything
    } catch(error) {
        console.error(error) // send the error to the console if it fails
    }
}

let hotelData = [] // empty variable to hold hotel data later

getHotelData().then(data => {
    hotelData = data
    console.log(hotelData)
}) // put it into the empty variable (implicit return)

// put all the buttons in a variable
const allButtons = document.querySelectorAll("button")

// add a listener to each button
allButtons.forEach(button => {
   button.addEventListener('click', displayHotelInfo)  
})

function displayHotelInfo(event) { // takes an event
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase() // compare without case sensitivity
    })
    console.log(hotelChoice) // see what the id of what you clicked on is

    // fill in the name
    document.querySelector('#hotelName').textContent = `${hotelChoice.name}`

    // fill in the address
    document.querySelector('#address').textContent = `${hotelChoice.address}`

    // fill in the number of rooms
    document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`

    // fill in the gym status
    document.querySelector('#gym').textContent = `${hotelChoice.gym}`

    // fill in the types of rooms
    document.querySelector('#type').textContent = `${hotelChoice.roomtypes}`

    // fill in image
    document.querySelector('#picture').src=`images/${hotelChoice.picture}`
}



