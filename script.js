"use script";

/*let arr = ["a", "b", "c", "d", "e"];*/

// SLICE - Does not change/mutate original array
/*console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(2, -2));
console.log([...arr]);*/

// SPLICE - Changes/mutates original array
//console.log(arr.splice(2));
/*console.log(arr.splice(-1));
console.log(arr);
arr.splice(1, 2);
console.log(arr);*/

// REVERSE - Changes/mutates original array
/*arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);*/

// CONCAT - Does not change/mutate original array
/*const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(" - "));*/

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movementes.entries())
/*for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}*/

// With counter variable
/*for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}*/

////////////////////////////////////////
/*console.log("---- FOREACH ----");
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});*/

// With counter/index variable
/*movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});*/

// forEach with Map
/*const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);*/

/*currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});*/

// forEach with Set
/*const currenciesUnique = new Set(['USD', 'GDB', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map) {
  console.log(`${value}: ${value}`);
})*/

const euroToUsd = 1.1;

// map method
// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

// Using arrow function
/*const movementsUSD = movements.map(mov => mov * euroToUsd);
console.log(movements);
console.log(movementsUSD);*/

// Using for of loop
/*const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});*/

// Using ternary  operator
/*const movementsDescriptionsi = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptionsi);*/

// filter method
/*const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);*/

// Using for of loop
/*const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);*/

/*const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);*/

/*const withdrawalsFor = []
for (const mov of movements) if (mov < 0) withdrawalsFor.push(mov)
console.log(withdrawalsFor);*/

// reduce method
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

/*const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);*/

// Using for of loop
/*let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);*/

// Using reduce to find maximum value
/*const max = movements.reduce((acc, cur) => {
  if (acc > cur) {
    return acc;
  } else return cur;
}, movements[0]);
console.log(max);*/

// when finding minimum or maximun value with reduce method, always go with 1st value of the arrayn not zero. but if accumulating, you start with zero.

/*const euroToUSD = 1.1;
const totalDepositsInUSD = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * euroToUSD)
  .map((mov, i, arr) => {
    //console.log(arr);
    return mov * euroToUSD;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsInUSD);*/

// find method
/*const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);*/

// Checks only for equality
/*console.log(movements);
console.log(movements.includes(-130));*/

// SOME: We can spacify a condition
/*const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);*/

/// EVERY
/*console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));*/

/*const deposits = mov => mov > 0;
console.log(movements.some(deposits));
console.log(movements.every(deposits));
console.log(movements.filter(deposits));*/

// flat method - only goes 1 level deep when flattening the array
/*const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // it accepts depth argument. 1 is the default*/

/*const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);*/

// chaining all the methods
/*const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap method - only goes 1 level deep and cant't be changed
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

// Sorting Arrays - by default, sort method sorts base on strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

// Numbers
console.log(movements);*/

// The 2 parametrs are the current value and the next value
// return < 0 A, B (switch order)
// return > 0  B, A (switch order)

// Ascending order
// movements.sort((a, b) => {
//   if (a > b) return 1;

//   if (b > a) return -1;
// });
/*movements.sort((a, b) => a - b);
console.log(movements);*/

// Descending order
// movements.sort((a, b) => {
//   if (a > b) return -1;

//   if (b > a) return 1;
// });
/*movements.sort((a, b) => b - a);
console.log(movements);

// More ways of creating and filling arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);

console.log(x.fill(1, 3, 5));
console.log(x.fill(1));

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => +el.textContent.replace('e', '')
  );

  console.log(movementsUI);
});*/

// Constructor functions - OOP ----- COMMIT FROM HERE
/*const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function() {
  //   console.log(2037 - birthYear);
  // }
};

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} is linked to prototype
// 4. function automatically returns {}
const jonas = new Person("Jonas", 1991);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(jonas instanceof Person);

Person.hey = function () {
  console.log("Hey there");
};

Person.hey();

// Prototypes
console.log(Person.prototype);

// Setting methods
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// setting property
Person.prototype.species = "Homo sapiens";
console.log(jonas.species, matilda.species);

// Prortotype on construction functions
console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);
console.log(Person.prototype.constructor);

console.dir(Person.prototype.constructor);

// Prototype on arrays
const arr = [3, 3, 3, 4, 4, 4, 4, 7, 6, 5, 4, 7];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");

// ES6 CLASSES
// class expression
//const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to the .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  // getters and setters in classes
  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("Hey there");
    console.log(this);
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

// PersonCl.prototype.greet = function() {
//   console.log(`Hey ${this.firstName}`);
// }
jessica.greet();

// 1. Classes are not hoisted even the class declarations
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl("Walter White", 1965);

PersonCl.hey();

// Getters and Setters

// getters and setters are called assessor properties
// normal properties are called data properties

// getters and setters in simple object literals
const account = {
  owner: "jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

// static method

// object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName}, and i studied ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
console.log(mike);
mike.introduce();*/

/////////////////////////////////////

//Inheritance Between Classes: constructor function
/*const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};*/

// Linking prototypes
/*Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;*/
//console.dir(Student.prototype.constructor);

// Inheritance Between Classes: ES6 classes
/*class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to the .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  // getters and setters in classes
  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("Hey there");
    console.log(this);
  }
}*/

// extend and super keywordS are the 2 ingredients we need to inherit between ES6 classes

/*class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always need to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a students, I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
martha.introduce();
martha.calcAge();

// Inheritance With Classes: Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Computer Science");
jay.introduce();
jay.calcAge();

// Another class example

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods

class Account {
  // Public fields (instances)
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    //this._movements = [];
    //this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdrawal(val) {
    this.#movements.push(-val);
    return this;
  }

  requestLoan(val) {
    //if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  // Private methods
  //#approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);

// acc1.movements.push(250);
// acc1.movements.push(-150);
acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(1000);
console.log(acc1);
console.log(acc1.getMovements());

/////////////////////////////////////
// Encapsulation: Protected Properties and methods


/// Chaining 
acc1.deposit(300).deposit(500).withdrawal(35).requestLoan(25000).deposit(4000);
console.log(acc1.getMovements());*/


// A CLOSER LOOK AT FUNCTIONS

const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
  // ES5 - default parameters
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price
  }

  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

const flight = "LH234";

const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284
}

const checkIn = function(flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr " + passenger.name;

  if (passenger.passport = 24739479284){
    //alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
}

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
}

newPassport(jonas);
checkIn(flight, jonas);

///////////////////////////////////////
// FIRST CLASS AND HIGHER ORDER FUNCTIONS

const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
  [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
}

// Higher-order functions
const transformer = function(str, fn) {
  console.log(`The original string: ${str}`);
  console.log(`The transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
/*const high5 = function () {
  console.log('high five');
};

document.body.addEventListener('click', high5);
['John', 'Jonas', 'Martha'].forEach(high5);*/

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Bright');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Victor');

//////////////////////////////////////////
// THE CALL AND APPLY METHOD

const lufthansa = {
  airline: "Lufthansa",
  iatacode: "LH",
  bookings: [],

  //book: function () {}
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`);
    this.bookings.push({flight: `${this.iatacode}${flightNum}`, name});
  }
}

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iatacode: "EW",
  bookings: [],
}

const book = lufthansa.book;

// Does NOT work
//book(23, "Srah Williams");

// Call method
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 23, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iatacode: "LX",
  bookings: []
}

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

// Apply method - does not recieve a list of arguments after the this keyword
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
// book.call(eurowings, 23, "Sarah Williams");

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Schmedtmann");
bookEW23("Martha Cooper");

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
}
//lufthansa.buyPlane()

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT(23));

///////////////////////////////////
// IIFE 
(function () {
  console.log("This function will never run again");
})();

// IIFE - arrow function
(() => console.log("This function will ALSO never run again"))();

////////////////////////
// CLOSURES

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  }
}

const booker = secureBooking();
booker();
booker();
booker();

//////////////////////////
// More closuress examples

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  }
}

const h = function () {
  b = 777;
  f = function () {
    console.log(b * 2);
  }
}

g();
f();

// Reasigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function(n, wait) {
  const perGroup = n / 3;

  setTimeout(function() {
    console.log(`We're now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers.`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
}

boardPassengers(180, 3);


































































