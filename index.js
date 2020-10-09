/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

// Creates Person constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
// .eat(food) adds 'food' to stomach array if it has less than 10 items.
Person.prototype.eat = function (food) {
  // Makes sure stomach is not full
  if (this.stomach.length < 10) {
    // Adds 'food' to stomach
    this.stomach.push(food);
  }
};
// .poop() makes stomach array empty
Person.prototype.poop = function () {
  this.stomach = [];
};
// .toString returns a string describing the Persons name and age.
Person.prototype.toString = function () {
  return `${this.name} and ${this.age}`;
};

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

// Car Constructor
function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
// .fill(gallons) adds gallons to however many gallons the Car already has.
Car.prototype.fill = function (gallons) {
  this.tank += gallons;
};

// .maxTrip() calculates exactly how far the car is able to go
Car.prototype.maxTrip = function () {
  return this.tank * this.milesPerGallon;
};

// .trip(distance) calculates how much gas was used based on the cars miles per gallon and distance calculated to drive.
Car.prototype.tripEconomy = function (distance) {
  return distance / this.milesPerGallon;
};
// .drive(distance) calculates how much the odometer and tank will change after a trip.
Car.prototype.drive = function (distance) {
  // checks if there is gas in the first place
  if (this.tank > 0) {
    // checks if the car would have run out of gas before getting to the destination
    if (distance <= this.maxTrip()) {
      // adds to odometer like normal
      this.odometer += distance;
      // takes away from the tank like normal
      this.tank -= this.tripEconomy(distance);
    } else if (distance > this.maxTrip()) {
      /* The car would run out of gas in the middle of the trip */
      /* Part of me would put a prompt here to ask the user if they would like to continue with the trip knowing they would run out of gas...but thats just me */

      // How much was the distance over the maxTrip
      let overage = distance - this.maxTrip();
      // How much was actually driven before tank got to 0.
      let actualDistanceDriven = distance - overage;
      // Added miles to odo till tank got to 0
      this.odometer += actualDistanceDriven;
      // ran out of gas.
      this.tank = 0;
      // tells the user when they ran out of gas
      return `I ran out of fuel at ${this.odometer} miles!`;
    }
  }
};

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

// Baby Child constructor
function Baby(name, age, favoriteToy) {
  // Brings in Parent keys
  Person.call(this, name, age);
  // Adds Baby's favorite toy
  this.favoriteToy = favoriteToy;
}
// last step in creating child constructor
Baby.prototype = Object.create(Person.prototype);
// returns string saying the baby is playing with their favorite toy
Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
};

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Gloabl/Window binding selects the whole browser
  2. Implicit binding selects everything within the particular object
  3. New Binding allows this to be used in Function constructors
  4. Explicit Binding allows this in call/apply
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (Airplane) {
    module.exports.Airplane = Airplane;
  }
  if (Person) {
    module.exports.Person = Person;
  }
  if (Car) {
    module.exports.Car = Car;
  }
  if (Baby) {
    module.exports.Baby = Baby;
  }
}
