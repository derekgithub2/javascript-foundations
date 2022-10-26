var Victim = require('./victim')

class Werewolf {
    constructor (newWerewolf) {
        this.name = newWerewolf
        this.form = 'human'
        this.hungry = false
    }

    completeTransformation() {
        if (this.form === 'human') {
            this.form = 'wolf'
            this.hungry = true
            return 'Aaa-Woooo!'
        } else if (this.form === 'wolf') {
            this.form = 'human'
            this.hungry = false
            return 'Where are I?'
        }
    }

    eatVictim(newVictim) {
        if (this.hungry === true && this.form === 'wolf') {
            newVictim.alive = false
            this.form = 'human'
            return `Yum, ${newVictim.name} was delicious.`
        } else {
            return `No way am I eating ${newVictim.name}, I'd like a burger!`
        }
    }

}

module.exports = Werewolf;