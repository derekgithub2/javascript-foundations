class Centaur {
    constructor (newCentaur) {
        this.name = newCentaur.name
        this.breed = newCentaur.type
        this.cranky = false
        this.standing = true
        this.counter = 0;
        this.layingDown = false;
    }
    
    shootBow() {
        this.counter++
        if (this.counter > 2 && this.cranky === false || this.layingDown === true) {
            this.cranky = true
            return "NO!"
        } else {
            return 'Twang!!!'
        }
    }

    run() {
        if (this.cranky === false) {
            this.counter++
            return 'Clop clop clop clop!!!'
        } else if (this.counter > 2 && this.cranky === false || this.layingDown === true) {
            this.cranky = true
            return "NO!"
        } else {
            return "NO!"
        }
    }

    sleep() {
        this.cranky = false
        if (this.standing === true) {
            return "NO!"
        }
        if (this.layingDown === true) {
            return "ZZZZ"
        }
    }

    layDown() {
        this.layingDown = true;
        this.standing = false;
    }

    standUp () {
        this.layingDown = false;
        this.standing = true;
    }

}

module.exports = Centaur;