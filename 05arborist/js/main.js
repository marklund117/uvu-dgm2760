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
    if (trees.length > 0) {
    trees.sort()
    displayTrees()
    } else {
        errorDiv.textContent = 'Cannot sort trees if there are no trees'
    }
}

// seventh button - convert all tree names to lowercase
document.querySelector('#lowerTrees').onclick = () => {
    // there's probably a more elegant way to do this than a for loop
    if (trees.length > 0 ) {
    for (let i = 0; i < trees.length; i++) {
        trees[i] = trees[i].toLowerCase()
    }
    displayTrees()
    } else {
        errorDiv.textContent = 'Cannot make all trees lowercase if there are no trees'
    }
}

// eighth button - whats 3
document.querySelector('#whatsThree').onclick = () => {
    if (trees.length > 2) {
    errorDiv.textContent = `The third tree is named ${trees[2]}`
    } else {
        errorDiv.textContent = 'Cannot display third tree if there not at least three trees'
    }
}

// ninth button - whats 4
document.querySelector('#whatsFour').onclick = () => {
    if (trees.length > 3) {
    errorDiv.textContent = `The fourth tree is named ${trees[3]}`
    } else {
        errorDiv.textContent = 'Cannot display fourth tree if there not at least four trees'
    }
}

// initial display
displayTrees()

