// this is the main JS file for module 5 in DGM 2760 2022 spring, mark lund

// fill text of header h1
document.querySelector('header > h1').textContent = "Arborist"
// fill text of header h2
document.querySelector('header > h2').textContent = "Events and Arrays"

// Array with 4 trees listed
const trees = ['Magnolia', 'Fir', 'Birch', 'Avocado']
// reference to display div
const treeList = document.querySelector('#treelist')
// reference to error div
const errorDiv = document.querySelector('#error')

// display the list of trees in the array within the div
// this is an arrow function
const displayTrees = () => {
    // define a string that will store the display
    let treeString = ''
    // this used to be a for loop but its more modern to use forEach with an arrow
    trees.forEach(tree => {
        console.log(tree)
        treeString += `${tree} <br>`
    })
    treeList.innerHTML = `${treeString} <span>${trees.length} elements long</span>`
}

// >>>>>   B U T T O N   C O D E   <<<<<

// first button - add Pines to end
document.querySelector('#addPineEnd').onclick = () => {
    trees.push('Pine')
    displayTrees()
}

// second button - add Peaches to start
document.querySelector('#addPeachStart').onclick = () => {
    trees.unshift('Peach')
    displayTrees()
}

// third button - remove first tree no matter what it is
document.querySelector('#removeTreeFirst').onclick = () => {
    if (trees.length > 0) {
    trees.shift()
    displayTrees()
    } else {
        errorDiv.textContent = 'Cannot remove first tree if there are no trees'
    }
}

// fourth button - remove second tree no matter what it is
document.querySelector('#removeTreeSecond').onclick = () => {
    if (trees.length > 1) {
        trees.splice(1, 1) // i wonder if this works
        displayTrees()
        } else {
            errorDiv.textContent = 'Cannot remove second tree if there are not at least 2 trees'
        }
}

// fifth button - remove last tree no matter what it is
document.querySelector('#removeTreeFinal').onclick = () => {
    if (trees.length > 0) {
        trees.pop()
        displayTrees()
        } else {
            errorDiv.textContent = 'Cannot remove last tree if there are no trees'
        }
}

// sixth button - sort trees a->z
document.querySelector('#sortTrees').onclick = () => {
    trees.sort()
    displayTrees()
}

// seventh button - convert all tree names to lowercase
document.querySelector('#lowerTrees').onclick = () => {
    // define a string that will store the lowercasedisplay
    let treeStringLow = ''
    // this used to be a for loop but its more modern to use forEach with an arrow
    trees.forEach(tree => {
        // honestly i'd like it better if this was permanent, this seems like i'm on the wrong idea
        treeStringLow += `${tree.toLowerCase()} <br>`
    })
    treeList.innerHTML = `${treeStringLow} <span>${trees.length} elements long</span>`
}




// lets get going
displayTrees()

