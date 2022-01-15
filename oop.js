"use strict";
const personN = function (first, birth) {
  this.firstN = first;
  this.birthy = birth;
};

const munali = new personN("muna", 1912);
console.log(munali);
// New{} is created and a function is called(personN), this={}, and {} is linked to prototype and also the function will return{}

const ete = new personN("etete", 2000);
const jack = new personN("jackey", 1990);
console.log(ete, jack);
console.log(personN.prototype);

personN.prototype.calcAge = function () {
  console.log(2020 - this.birthy);
};
ete.calcAge();

const ageChecker = function checker(nom, birthY, favColor) {
  this.name = nom;
  this.birthYear = birthY;
  this.favorite = favColor;
};
const gege = new ageChecker("egigayo", 1989, "red");
const getaDoc = new ageChecker("geachew", 1992);
console.log(gege);
ageChecker.prototype.calcAge = function () {
  console.log(2030 - this.birthYear);
};
gege.calcAge();
console.log(getaDoc.__proto__ === ageChecker.prototype);
console.log(ageChecker.prototype.isPrototypeOf(getaDoc));
ageChecker.prototype.colors = "burgendy";
console.log(gege.hasOwnProperty("name"));
console.log(gege.__proto__.__proto__);

const arr = [34, 45, 56, 67];
console.log(arr.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
const h2 = document.querySelector("h2");

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.axel = function () {
  this.speed += 10;
  console.log(`${this.make} is flowing at ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is flowing at ${this.speed}`);
};

const bmw = new Car("bmw", 140);
const mercedes = new Car("mercedes", 140);
bmw.axel();
bmw.brake();
bmw.axel();
mercedes.brake();

//Classes//!!

class Momo {
  constructor(first, birth) {
    this.first = first;
    this.birth = birth;
  }
  calculate() {
    console.log(2020 - this.birth);
  }
  blob() {
    console.log(`you were born ${this.birth}`);
  }
}
const jess = new Momo("muna", 1990);
console.log(jess);
jess.calculate();
Momo.prototype.greet = function () {
  console.log(`sup ${this.first}`);
};
jess.greet();
jess.blob();

const account = {
  owner: "muna",
  caching: [23, 34, 45, 56, 76],

  get latest() {
    return this.caching.slice(-1).pop();
  },
  set latest(mula) {
    this.caching.push(mula);
  },
};
console.log(account.latest);
account.latest = 80;
console.log(account.caching);
