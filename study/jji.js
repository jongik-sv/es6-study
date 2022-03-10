function User(name, age) {
    this.name = name
    this.age = age
    this.sayName = function() {
      console.log(this.name)
    }
  }
  let user1 = new User('Hi', 30)
  user1.sayName()