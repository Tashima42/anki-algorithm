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

    newWordObject.word = readlineSync.question('Word: ');
    const difficultiesIndex = readlineSync.keyInSelect(difficultiesArray, 'Difficulty: ');
    newWordObject.difficulty = difficultiesArray[difficultiesIndex]

    return newWordObject;
}

wordsArray.push(getNewWords(wordsArray))

console.log(wordsArray)
