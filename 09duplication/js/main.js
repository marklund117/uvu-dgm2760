// main JS file for DGM 2760 module 9

function duplicateMenu() { // function to duplicate the menu
    // get all of the anchor elements from the top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a') // convenient
    // this isnt an array it's a node list

    // create the new list items for the bottom menu
    let newList = document.createElement('ul') // create a new unordered list

    topList.forEach(menuItem => { // for each menu item
        let newLI = document.createElement('li') // create a fresh LI each time
        let newLink = document.createElement('a') // new anchor for each
        newLink.setAttribute('href', menuItem.getAttribute('href')) // clone it
        newLink.innerText = menuItem.innerText // clone that too
        newLI.appendChild(newLink) // put the link in the LI
        newList.appendChild(newLI) // put the LI in the menu
    })
    document.querySelector('#smallNavArea').appendChild(newList) // put it in the HTML
}

duplicateMenu() // call it