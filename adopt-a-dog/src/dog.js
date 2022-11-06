class Dog {
  constructor(newDog) {
    this.name = newDog.name
    this.age = newDog.age
    this.energyLevel = 5
    this.hungry = true
    this.friends = []
  }

  eat () {
    if (this.hungry === false) {
      return 'I refuse to eat.'
    } 
    if (this.hungry === true) {
      this.hungry = false
      return 'Yum!'
    }
  }

  fetchBall () {
    if (this.energyLevel > 3) {
      this.energyLevel = this.energyLevel - 1
      return 'This is fun!'
    } else {
      return 'Nah, I\'m going to sleep instead.'
    }
  } 

  sleep () {
    if (this.energyLevel < 10) {
      this.energyLevel++
    } else {
      return 'I have too much energy to rest. I\'m going to chew something instead.'
    }
  }
  
  makeNewFriend (newFriendObj) {
    this.friends.push(newFriendObj.name)
    // console.log(this.friends)
  }

}

module.exports = Dog;
