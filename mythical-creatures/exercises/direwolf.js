class Direwolf {
    constructor (objName, home, size) {
        this.name = objName
        this.home = home || 'Beyond the Wall'
        this.size = size || 'Massive'
        this.starksToProtect = []
        this.huntsWhiteWalkers = true
    }

    protect(stark) {
        // if this.home = stark.area then push else don't
        // console.log(this.home)
        // console.log(stark.location)
        if (this.home === stark.location && this.starksToProtect.length < 2){
            this.starksToProtect.push(stark)
            stark.safe = true
            this.huntsWhiteWalkers = false
        }
    }

    leave(stark) {
        this.starksToProtect.splice(stark, 1)
        stark.safe = false
        // console.log(this.starksToProtect)
    }

}

module.exports = Direwolf;