class Dragon {
  constructor(dragonName, dragonRider) {
    this.name = dragonName;
    this.rider = dragonRider;
    this.hungry = true;
    console.log(this)
  }

  greet () {
    return `Hi, ${this.rider}!`
  }

  // eat function: first start internal counter 
  // if this.hungry is less than 3, then return true, else return false

  
  eat () {
    var count = 0;
    if (count < 3) {
      this.hungry = true;
      count++;
    } else {
      this.hungry = false;
    }
    console.log(count)
    return count;
  }
}

module.exports = Dragon;