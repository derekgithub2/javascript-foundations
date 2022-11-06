var Dog = require("./dog.js");

class Person {
  constructor(personName, dog) {
    this.name = personName
    this.dog = dog

  }

  fillFoodBowl() {
    this.dog.eat();
    // CAN USE METHODS/FUNCTIONS FROM OTHER CLASS
  }

  throwBall() {
    this.dog.fetchBall()
    // fetchball has a return statement but that only ends the fetchball function not the throwball function

    // this.dog.energyLevel --
    return `${this.dog.name} loves playing fetch!`
  }

  introduceNewFriends(dog) {
  //Option 1
    this.dog.makeNewFriend(dog)
    // REMEMBER TO SPECIFY WHICH CLASS INSTANCE YOU ARE USING TO CALL THE METHOD *THIS.DOG*

  // Option 2
    // this.dog.friends = []
    // this.dog.friends.push(dog.name)

  }

  adoptAPup(unadoptedDogName, unadoptedDogAge) {
    if (this.dog !== undefined) {
      //can't use if(this.dog === 1) because this.dog is an OBJECT
      return `You can\'t adopt ${unadoptedDogName}. You already have ${this.dog.name}!`
    } else {
      var unadoptedDog = new Dog({name: unadoptedDogName, age: unadoptedDogAge});
      // need the (name, age) passed into this new class instance because this is the name of the key. this allows us to use the parameter from adoptAPup to set this.dog.name to the name that is passed through 
      this.dog = unadoptedDog
    }
  }
}

module.exports = Person;

// if (this.dog === undefined) {
//   var unadoptedDog = new Dog({name: unadoptedDogName, age: unadoptedDogAge});
//   // need the (name, age) passed into this new class instance because this is the name of the key. this allows us to use the parameter from adoptAPup to set this.dog.name to the name that is passed through 
//   this.dog = unadoptedDog
// } else {
//   return `You can\'t adopt ${unadoptedDogName}. You already have ${this.dog.name}!`
// }