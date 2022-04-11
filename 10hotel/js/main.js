// this is the main JS file for module 8 in DGM 2760 2022 spring, mark lund

// fill text of header h1
document.querySelector('header > h1').textContent = "Hotel Booking"
// fill text of header h2
document.querySelector('header > h2').textContent = "Complete with tiny shampoo bottles"

// time to access the JSON with Fetch
//async function - this could be made even more general by passing in a URL 
async function getHotelData() {
    try {
        const response = await fetch('../hotel.json') // await the result of the fetch call
        return await response.json // await converting the response to JSON instead of giving us everything
    } catch(error) {
        console.error(error) // send the error to the console if it fails
    }
}

let hotelData = [] // empty variable to hold hotel data later

getHotelData().then(data => hotelData = data) // put it into the empty variable (implicit return)

console.log(hotelData)



