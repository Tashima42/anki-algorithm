const fs = require('fs')

const readCardsJSON = (dir) => {
    const readCardsFile = fs.readFileSync(dir)
    const cardsObject = JSON.parse(readCardsFile)
    return cardsObject
}

module.exports = {readCardsJSON : readCardsJSON}