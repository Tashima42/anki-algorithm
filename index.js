const readlineSync = require('readline-sync')
const fs = require('fs')

const wordsArray = []
let wordsObject

const generateId = () => '_' + Math.random().toString(36).substr(2, 9)  //https://gist.github.com/gordonbrander/2230317

const getNewWords = (arrayName) => {
    const difficultiesArray = ['again', 'good', 'easy']
    let newWordObject = {}
    let newWordId = generateId()

    newWordObject.word = readlineSync.question('Word: ');
    const difficultiesIndex = readlineSync.keyInSelect(difficultiesArray, 'Difficulty: ');
    newWordObject.difficulty = difficultiesArray[difficultiesIndex]
    newWordObject._id = newWordId

    wordsArray.push(newWordObject)
}

const repeatGetNewWords = (arrayName) => {
    while (readlineSync.keyInYN('Add new word?')) {
        getNewWords(arrayName)
    }
    return;
}

repeatGetNewWords(wordsArray)

wordsObject = wordsArray
jsonWords = JSON.stringify(wordsObject)

fs.writeFile("words.json", jsonWords, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
})
console.log(jsonWords)
