var Ogre = require('./ogre')

class Human {
    constructor(humanName) {
        this.name = humanName
        this.encounterCounter = 0
        this.knockedOut = false
    }

    noticesOgre() {
        if(this.encounterCounter < 3) {
            return false
        } else {
            this.encounterCounter = 0
            return true
        }
    }
}

module.exports = Human