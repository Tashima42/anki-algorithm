const readlineSync = require('readline-sync')

const wordsArray = []

/* Array sructure
[
    {
        word: 'word1',
        difficulty: 'easy'
    },
    {
        word: 'word2',
        difficulty: 'good'
    },
    { 
        word: 'word3',
        difficulty: 'again'
    }
]
*/


const getNewWords = (arrayName) => {
    const difficultiesArray = ['again', 'good', 'easy']
    let newWordObject = {}
    let newWordId = arrayName.length + 1

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
