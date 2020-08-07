const readlineSync = require('readline-sync')

const wordsArray = []

/* Array sructure
[
    {
        word: 'word1',
        difficulty: 'easy',
        id: 1
    },
    {
        word: 'word2',
        difficulty: 'good',
        id: 2
    },
    { 
        word: 'word3',
        difficulty: 'again',
        id: 3
    }
]
*/
const generateId = () => '_' + Math.random().toString(36).substr(2, 9)  //https://gist.github.com/gordonbrander/2230317

const getNewWords = (arrayName) => {
    const difficultiesArray = ['again', 'good', 'easy']
    let newWordObject = {}
    let newWordId = generateId()

    newWordObject.word = readlineSync.question('Word: ');
    const difficultiesIndex = readlineSync.keyInSelect(difficultiesArray, 'Difficulty: ');
    newWordObject.difficulty = difficultiesArray[difficultiesIndex]
    newWordObject.id = newWordId

    wordsArray.push(newWordObject)
}

const repeatGetNewWords = (arrayName) => {
    while (readlineSync.keyInYN('Add new word?')){
        getNewWords(arrayName)
    }
    return;
}

repeatGetNewWords(wordsArray)

console.log(wordsArray)
