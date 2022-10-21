class Vampire {
  constructor (vampireName, vampirePet = "bat") {
    this.name = vampireName;
    this.pet = vampirePet;
    this.thirsty = true;
    this.ouncesDrank = 0;
    
  }
  drink() {
    this.thirsty = false;
    this.ouncesDrank = this.ouncesDrank+10;
    if (this.ouncesDrank < 50) {
        return this.ouncesDrank;
    } else if (this.ouncesDrank = 50) {
        return "I'm too full to drink anymore!"
    }
    }  
}

module.exports = Vampire;