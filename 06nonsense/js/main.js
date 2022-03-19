// this is the main JS file for module 6 in DGM 2760 2022 spring, mark lund

// fill text of header h1
document.querySelector('header > h1').textContent = "Nonsense Story"
// fill text of header h2
document.querySelector('header > h2').textContent = "String Manipulation"

// i need these to be global, there's probably a better way to set this up but this works for now
let nounList = []
let adjectiveList = []
let verbList = []

// lets make the array split method first
function toLowerArray (givenString) {
    let lowerString = givenString.toLowerCase() // lower it
    let freshArray = lowerString.replace(/^\s+|\s+$/g, '').split(/\s+/) // copied lol, thanks stackoverflow
    console.log(`Converted a string to ${freshArray}`) // lets see it
    return freshArray  
}

// we need a way to prep the word arrays after input happens
function prepWords() {
    // get input, as strings for now
    const nouns = (document.querySelector('#thenouns').value)
    const adjectives = (document.querySelector('#theadjectives').value)
    const verbs = (document.querySelector('#theverbs').value)

    // now convert the given strings to arrays
    nounList = toLowerArray(nouns)
    adjectiveList = toLowerArray(adjectives)
    verbList = toLowerArray(verbs)
}

// and now, storytime
function genStory() {
    prepWords() // make sure these are ready
    // big string time
    document.querySelector('#grimoire').textContent = `Once upon a time in the magical forest of ${nounList[0]}s 
    there lived a ${adjectiveList[0]} witch who loved to ${verbList[0]} books at the the local library. One morning she 
    put her ${nounList[1]} and her ${nounList[2]} in her pockets and set off, hoping to find some ${adjectiveList[1]} literature to 
    ${verbList[1]}. But as she approached, a ${nounList[3]} carrying a bag filled with ${adjectiveList[2]} ${nounList[4]}s 
    blocked her path. As the ${nounList[3]} prepared to ${verbList[2]}, the witch laughed, knowing that this obstacle was 
    no more threat to her than a ${nounList[5]}. She quickly cast a spell which turned the ${nounList[3]} into a 
    ${nounList[6]}, and went happily on her way, to a library filled with good books to ${verbList[0]}.`
}

// generate story on button press
document.querySelector('#composetale').onclick = () => {
    genStory()
}



