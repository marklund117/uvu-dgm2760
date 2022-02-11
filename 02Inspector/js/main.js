// main JS file for module 2
// fill text of header h1 and h2
document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "Direct from Paris"

// function to re-display the values as needed
function reDisplay() {

// create windowSizes display variable and feed it the current width and height of the window
let windowSizes = `Window size is currently ${window.innerWidth} px wide by ${window.innerHeight} px tall`

// let's look at offset - getting the X and Y values
let offset = `Window offset is currently ${window.screenX} from the left edge and ${window.screenY} from the top edge`

// set inner text of paragraph under window properties to show those values
let mainWindow = document.querySelector('#mainWindow').innerText = windowSizes + '\n' + offset

// lets find out the area as well - and we'll use a toLocaleString to add commas to what is going to be a big number
let windowArea = ((window.innerWidth) * (window.innerHeight)).toLocaleString('en-US')
// and create a way to show it
let windowAreaString = `The Window currently contains ${windowArea} pixels`
// honestly there's probably a way to do this on a single line but I'm not going to spend too long on this extra bit

// set inner text of paragraph under window properties to show area too
let showWindowArea = document.querySelector('#windowArea').innerText = windowAreaString

// show URL
let showURL = document.querySelector('#url').innerText = `The URL of this page is ${document.URL}`

// show doc title and when it was last modified with some stuff I googled up on MDN
let showTitle = document.querySelector('#mainDocument').innerText = `The title of this document is ${document.title} \n This document was last updated ${document.lastModified}`
}

// load it up upon landing
reDisplay()

// upon resizing, calculate those values again
window.onresize = reDisplay





