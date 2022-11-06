var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor (medusaName) {
        this.name = medusaName
        this.statues = []
    }

    gazeAtVictim(victim){
        if (this.statues.length < 3) {
            this.statues.push(new Statue(victim.name))
        } else {
            var savedVictim = this.statues.splice(0,1)
            this.statues.push(new Statue(victim.name))
            var freedPerson = new Person(savedVictim[0].name)
            freedPerson.mood = 'relieved'
            return freedPerson
        }
        console.log(this.statues)
    }
}

module.exports = Medusa;