alert("hi");

// const and let
const a = 5;
const b = 3;
let myName = "Semo";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "nico";

console.log("your new name is " + myName);

// booleans
const nonsense = [1, 2, "hello", false, null];

console.log(nonsense[2]);

// add one more val to the array
nonsense.push(777);
console.log(nonsense);

// arrays
const toBuy = ["potato", "tomato"];
toBuy.push("kimbab");

// objects
const players = {
    name: "semo",
    points: 10,
    fat: true,
};
console.log(players);
console.log(players.name);
console.log(players["name"]);

console.log(players);
players.lastName = "potato";     // changing sth on the inside of object
players.points = players.points + 15;
console.log(players);

// functions
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);

// calculator
function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
function divide(a, b) {
    console.log(a / b);
}
plus(3, 48);
divide(34, 8);
//

const player = {
    name: "nico",
    sayHello: function (otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you!");
    },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("Nico");

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    }
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const divideResult = calculator.divide(minusResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);    // comments on notion

const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age);

console.log(KrAge);

// conditionals
const Age = parseInt( prompt("How old are you?") );

console.log(isNaN(Age));

if(isNaN(Age) || Age < 0){  // || is OR operator
    // condition == true
    console.log("Please write a real positive number");
} else if (Age < 18) {
    console.log("You are too young.");
} else if (Age >= 18 && Age <= 50) {    // && is AND operator, which both of them should be true 
    console.log("You can drink.");
} else if (Age > 50 && Age <= 80) {
    console.log("You should exercise.");
} else if (Age > 80) {
    console.log("You can do whatever you want.");
} else {
    // condition == false
    console.log("You can't drink.");
}