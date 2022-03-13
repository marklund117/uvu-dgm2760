// this is the main JS file for module 5 in DGM 2760 2022 spring, mark lund

// fill text of header h1
document.querySelector('header > h1').textContent = "Arborist"
// fill text of header h2
document.querySelector('header > h2').textContent = "Events and Arrays"

// Array with 4 trees listed
const trees = ['Avocado', 'Magnolia', 'Fir', 'Birch']
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
    trees.shift()
    displayTrees()
}

// fourth button - remove second tree no matter what it is
document.querySelector('#removeTreeSecond').onclick = () => {
    trees.splice(1, 1) // i wonder if this works
    displayTrees()
}

// fifth button - remove last tree no matter what it is
document.querySelector('#removeTreeLast').onclick = () => {
    trees.pop()
    displayTrees()
}

// sixth button - sort trees a->z
document.querySelector('#sortTrees').onclick = () => {
    trees.pop()
    displayTrees()
}

// seventh button - convert all tree names to lowercase
document.querySelector('#lowerTrees').onclick = () => {
    trees.pop()
    displayTrees()
}

// eighth button - whats the name of tree 3
document.querySelector('#removeTreeLast').onclick = () => {
    trees.pop()
    displayTrees()
}

// ninth button - whats the name of tree 4
document.querySelector('#removeTreeLast').onclick = () => {
    trees.pop()
    displayTrees()
}


// lets get going
displayTrees()

