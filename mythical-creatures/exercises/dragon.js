class Dragon {
  constructor(dragonName, dragonRider) {
    this.name = dragonName;
    this.rider = dragonRider;
    this.hungry = true;
    this.count = 0;
  }

  greet () {
    return `Hi, ${this.rider}!`
  }

  eat () {
    this.count++;
    if (this.count < 3) {
      this.hungry = true;
    } else {
      this.hungry = false;
    }
    return this.count;
  }
}

module.exports = Dragon;