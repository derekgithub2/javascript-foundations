var Human = require ("./human")

class Ogre {
    constructor(ogreObject) {
        this.name = ogreObject.name
        this.home = ogreObject.abode || 'Swamp'
        this.swings = 0
    }

    encounter(humanObj) {
        humanObj.encounterCounter++
        // console.log(humanObj)
        if (humanObj.encounterCounter > 2) {
            this.swingAt(humanObj)
        }
        if (humanObj.encounterCounter > 5 && this.swings === 2) {
            humanObj.knockedOut = true
        }
        // humanObj.noticesOgre()
        // console.log(humanObj);
        // console.log(this.swings)

    }

    swingAt(humanObj) {
        if (this.swings < 2) {
            this.swings++
        }
    }

    apologize(humanObj) {
        humanObj.knockedOut = false
    }
}

module.exports = Ogre