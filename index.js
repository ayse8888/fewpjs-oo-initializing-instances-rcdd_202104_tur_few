<<<<<<< HEAD
// Write your code here
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}


class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

class Dinner {
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert = dessert;
  }
}
=======
// Write your code here
class Breakfast {
  constructor(food, juice) {
    this.food = food;
    this.juice = juice;
  }
}
let newBreakfast = new Breakfast("pancake", "juice");
function breakfast() {
    console.log(`Today's juice is ${this.juice}.`);
  }
Breakfast.breakfast()

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}
let newLunch = new Lunch("american", "chicken noodle", "wine");
function lunch() {
    console.log(`Today's soup is ${this.soup}.`);
  }
Lunch.lunch()


class Dinner {
  constructor(salad, soup, entree, dessert) {
    this._salad = salad;
    this._soup = soup;
    this._entree = entree;
    this._dessert = dessert;
  }
}
let newDinner = new Dinner("american", "chicken noodle", "grilled chicken", "ice cream");
>>>>>>> 4f43d3543278ee2aebc4a64b32e840f6340e47fd
