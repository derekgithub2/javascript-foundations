class Magician {
    constructor (magician) {
        this.name = `The Great ${magician.name}`
        this.assistant = magician.assistant
        if (magician.name === 'Scott') {
            this.favoriteAccessory = 'top hat'
        } else {
            this.favoriteAccessory = magician.clothing
        }
        this.confidencePercentage = 10
    }

    performIncantation(spellCharm) {
        return `${spellCharm.toUpperCase()}!`
    }

    performTrick() {
        this.confidencePercentage += 10
        if (this.favoriteAccessory === 'cape') {
            return 'PULL DOVE FROM SLEEVE'
        } else {
            return 'PULL RABBIT FROM TOP HAT'
        }
    }

    performShowStopper() {
        if (this.confidencePercentage > 10 && this.assistant === true) {
            return 'WOW! The magician totally just sawed that person in half!'
        } else {
            return 'Oh no, this trick is not ready!'
        }
    }
}

module.exports = Magician;