'use strict';

// default parameters
const bookings = [];
const createbooking = function (
  flightNumber,
  numPassengers = 2,
  price = 3 * numPassengers
) {
  // ES5
  //numPassengers = numPassengers || 2;
  //price = price || 1000;
  const booking = {
    flightNumber,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createbooking('LH123');
createbooking('LH123', 2, 600);
createbooking('LH123', 200);
createbooking('LH123', 35);

createbooking('LH123', undefined, 388);

// passing arguments values Vs references

const flight = 'LH123';
const Noman = {
  name: 'Noman Ejaz',
  passport: 8765432256,
};
const checkIn = function (flightnum, passenger) {
  flightnum = 7862109;
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 8765432256) {
    alert('checkedIn');
  } else {
    alert('Wrong passport');
  }
};
//console.log(flight);
//console.log(Noman);
//checkIn(flight, Noman);

// example
const newPassport = function (person) {
  person.passport = 1234567890;
};
//newPassport(Noman);
console.log(flight);
console.log(Noman);
checkIn(flight, Noman);

// callback functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const firstUpperCase = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformed = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformed('JavaScript is the best', firstUpperCase);
transformed('JavaScript is the best', oneWord);

// practice example

const sum = function (a, b) {
  console.log(a + b);
};
const calculator = function (a, b, sum) {
  sum(a, b);
};

calculator(1, 2, sum);

// example

const Family = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
const happyFamily = function (str, Family) {
  console.log(`Normal string: ${str}`);
  console.log(`Edit string: ${Family(str)}`);
  console.log(`edited by : ${Family.name}`);
};

happyFamily('Noman and maryam have a perfect family', Family);

// function return function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greaterHey = greet('hey');
greaterHey('noman');
greaterHey('maryam');

// example of arrow function

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hello')('Maryam');

// call and apply method
const Lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  book(flightnum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightnum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightnum}`, name });
  },
};
Lufthansa.book(239, 'Maryam Arshad');
Lufthansa.book(654, 'Noman Ejaz');
//console.log(Lufthansa);

const eurowings = {
  airline: 'eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = Lufthansa.book;

//book(26, 'sarah');
// call method
book.call(eurowings, 26, 'sarah');
console.log(eurowings);

book.call(Lufthansa, 239, 'Marre');
console.log(Lufthansa);

// another object

const swiss = {
  airline: 'swiss',
  iataCode: 'LX',
  booking: [],
};

book.call(swiss, 283, 'john');
//console.log(swiss);

//apply method

const flightData = [583, 'Marry Cooper'];
//book.apply(swiss, flightData);

book.call(swiss, ...flightData);
console.log(swiss);

// the bind method

Lufthansa.book(239, 'Maryam Arshad');
Lufthansa.book(654, 'Noman Ejaz');
//console.log(Lufthansa);

const eurowings2 = {
  airline: 'eurowings',
  iataCode: 'EW',
  booking: [],
};

const book2 = Lufthansa.book;

//book(26, 'sarah');
// call method
book.call(eurowings, 23, 'sarah');
console.log(eurowings);

book.call(Lufthansa, 239, 'Marre');
console.log(Lufthansa);

// another object

const swiss2 = {
  airline: 'swiss',
  iataCode: 'LX',
  booking: [],
};

book.call(swiss, 283, 'john');
console.log(swiss);

//apply method

const flightData2 = [583, 'Marry Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(Lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'steven villiams');
bookLH(239, 'jorge cooper');
bookLX(283, 'Maxilla');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Martha Cooper');
bookEW23('john williams');

// with EventListeners

Lufthansa.planes = 300;
Lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

//Lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', Lufthansa.buyPlane.bind(Lufthansa));

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAX = addTax.bind(null, 0.33);
//addVAX = value => value + value * rate;

console.log(addVAX(100));
console.log(addVAX(23));

// example function return function

const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAX2 = addTax2(0.23);
console.log(addVAX2(100));
console.log(addVAX2(23));

// immediately invoked function expression

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('this will never run again');
  const isPrivate = 23;
})();

//console.log(isPrivate);

//for arrow function

(() => console.log('this will  also never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 45;
}

//console.log(isPrivate);
console.log(notPrivate);

// closures

let f;

const g = function () {
  const a = 45;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 23;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);

// re-assigning the value
h();
f();
console.dir(f);

// example#2

const boardingPassengers = function (n, wait) {
  //const perGroup = n / 4;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`there are 4 groups each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

//boardingPassengers(160, 4);

// scope chain have the priority over closure
const perGroup = 1000;
boardingPassengers(160, 4);
