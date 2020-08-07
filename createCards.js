const readlineSync = require('readline-sync')

const wordsArray = []

const generateId = () => '_' + Math.random().toString(36).substr(2, 9)  //https://gist.github.com/gordonbrander/2230317

const getNewWords = () => {
    const difficultiesArray = ['again', 'good', 'easy']
    let newWordObject = {}
    let newWordId = generateId()

    newWordObject.word = readlineSync.question('Word: ');
    const difficultiesIndex = readlineSync.keyInSelect(difficultiesArray, 'Difficulty: ');
    newWordObject.difficulty = difficultiesArray[difficultiesIndex]
    newWordObject._id = newWordId

    wordsArray.push(newWordObject)
}

const repeatGetNewWords = () => {
    while (readlineSync.keyInYN('Add new word?')) {
        getNewWords()
    }
    return;
}

module.exports = {
    repeatGetNewWords,
    wordsArray: wordsArray
}
