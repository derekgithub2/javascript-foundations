class Hobbit {
    constructor (nameObj) {
        this.name = nameObj.name;
        this.age = 0;
        this.old = false;
        
    }

    celebrateBirthday () {
        this.age++
        if (this.age < 33) {
            this.adult = false;
        } else if (this.age === 33) {
            this.adult = true;
            this.old = false;
        } else if (this.age > 100) {
            this.old = true;
        }
    }
    
    getRing () {
        // if statement. if nameObj.name = "Frodo" then hasRing = true
        // else hasRing = false
        if (this.name === "Frodo") {
            this.hasRing = true;
            return "Here is the ring!";
        } else {
            this.hasRing = false;
            return "You can't have it!";
        }
    }
}


module.exports = Hobbit;