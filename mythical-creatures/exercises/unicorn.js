class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || "white";
    // console.log(this)
  }
  // need to create this function outside of the construtor
  isWhite() {
    return false
  };

  says(expression) {
    return `**;* ${expression} *;**`
  }
}


module.exports = Unicorn;
