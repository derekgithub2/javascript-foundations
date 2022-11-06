const Direwolf = require('../exercises/direwolf');

class Stark {
    constructor (starkObj) {
        this.name = starkObj.name
        this.location = starkObj.area || 'Winterfell'
        this.safe = false;
    }

    sayHouseWords () {
        if (this.safe === true) {
            return "The North Remembers"
        } else {
            return "Winter is Coming"
        }
    }

    callDirewolf(direwolfName, direwolfHome) {
        var calledDirewolf = new Direwolf(direwolfName, direwolfHome)
        console.log(calledDirewolf.starksToProtect)
        calledDirewolf.protect(this)
        return calledDirewolf
    }
}

module.exports = Stark;