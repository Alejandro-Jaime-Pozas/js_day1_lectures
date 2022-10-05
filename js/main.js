console.log('Hello World from main.js');
console.log('Hello again');
// ; is used to separate multiple cmds (like new lines in python)

// Basics of JavaScript this is a comment use '//'

/* 
    Multiline comment in js

    -- variable declaration in js --
    primitive data types:   string, number, boolean, undefined, null
    object data tYpes:      object (dict), array (list), function

    control flow
*/

// variable declaration
// use camelcase to name variables as below
// also, if you define variable like so, it creates global scope variable no matter its placement
var myName;

console.log(myName);

// string declaration
var myName = 'Brian'

console.log(myName);
console.log(typeof myName);

// string can be created using '', "", or ``. The tick marks (``) have a special behavior to format the string
// tick marks + ${varName} is equivalent to f"{var_name}" in Python.
console.log('My name is ${myName}');
console.log("My name is ${myName}");
console.log(`My name is ${myName}`);
// so tick marks actually allow the formatting of the string like python



// integer
var myAge = 100

console.log(myAge);
console.log(typeof myAge);

// float
var pi = 3.14

// in js, floats and integers are considered typeof number type
console.log(typeof pi)



// boolean
var boolTrue = true;
console.log(boolTrue);
console.log(typeof boolTrue);

var boolFalse = false;
console.log(boolFalse);
console.log(typeof boolFalse);



// undefined - is a variable that has NOT been assigned a value. different to null, which does have a 'null' value
var something;

console.log(something);
console.log(typeof something);

// null
var someNull = null;
console.log(someNull);
// this below is a bug which returns an object in js, but it is really like a None type in Python
console.log(typeof someNull);



// object (is like a dict in python)
var myObject = {
    a: 123,
    test: 'Hello'
};
// diff from python bc the KEY is actually a variable in js...not str or immutable

console.log(myObject);
console.log(typeof myObject);



// array (like python list) returns object type
var myArr = ['Brian', 'Chicago', 'Coding Temple']
console.log(myArr)
console.log(typeof myArr)



// function
// function abc(){} - this is like python def xfn(): pass
function abc(){}
console.log(abc)
console.log(typeof abc)



// accsessing properties in objects
var person = {
    first: 'Brian',
    last: 'Stanton',
    language: 'Python',
};

person.first = 'Frank'

console.log(person)



// bracket notation - use quotations
console.log(`my first name is ${person['first']}`);

// dot notation
console.log(`my last name is ${person.last}`);



// accessing values in an array
var newArr = [2, 4, 6, 8, 10]
//  must use bracket notation w an array
console.log(newArr[2]);
// arrays also have a length property automatically added
console.log(newArr.length);



// example
var mixedArr = [1, 'Hello', {a: 123, b:321}, [1,2,3]]
console.log(mixedArr)
console.log(mixedArr[2]['a'])
// this above is the same as this below
console.log(mixedArr[2].a)




// clear the console
// 



// let - allows us to declare a variable similar as var **let is block-scoped VS var is fn-scoped**
// var is a global scope no matter what EXCEPT for functions
let myCity = 'Chicago';
console.log(myCity);

if (true){
    var myState = "Illinois";
    let color = 'blue';
    let myCity = 'Springfield';
    console.log(myCity, myState, color);
}

// this causes error for color since it is not globally defined...
// console.log(myCity, myState, color);
console.log(myCity, myState);


// const - similar to let (block scoped) - 2 differences: 1. needs a value when declared 2. cannot be reassigned
const newVariable = 'something';
console.log(newVariable);

// newVariable = 'another thing'; // main.js:144 uncaught typeerror: assignment to constant variable

const myBirthday = true;
let ageOfPerson = 40;

if (myBirthday){
    const favColor = 'green';
    ageOfPerson = ageOfPerson + 1;
    // myBirthday = false; // error bc myBirthday was declared w *const*
    console.log(ageOfPerson);
    console.log(favColor);
}

// console.log(favColor); // ReferenceError: favColor is not defined


const cities = ['Chicago', 'New York', 'San Diego']

console.log(cities);

cities[1] = 'San Francisco'; // you CAN change items within a constant variable, as long as the variable itself is not changed completely

console.log(cities);

// cities = ['Austin', 'Portland']; // this wont work bc your cannot reassign a const variable that already exists
// console.log(cities)

const newPerson = {
    first: 'Abraham',
    last: 'Lincoln',
}

console.log(newPerson);

newPerson.first = 'Abe';
newPerson['last'] = 'Linc';

console.log(newPerson);

// YOU SHOULD ONLY USE CONST FOR THE PRIMITIVE DATA TYPES (string, number, boolean, undefined, null)

// use LET mostly, VAR only if necessary, CONST for the primitive data types




// clear the console for the next topic
// 


// console.clear()

/*
    Basic math ops
*/

// addition
let sum = 5 + 5;
console.log(sum);
sum += 5; // sum 5 to the 'sum' variable >>> sum = sum + 5
console.log(sum);
sum++; // sum = sum + 1 // sum += 1
console.log(sum);

// subtraction
let diff = 10 - 5;
console.log(diff);
diff -= 3; // diff = diff - 3
console.log(diff);
diff--; // diff = diff - 1 // diff -= 1
console.log(diff);

// multiplication
let prod = 4 * 5;
console.log(prod);
prod *= 2; // prod = prod * 2
console.log(prod);
// prod**; // this doesnt work bc expecting exponent

// division
let div = 40 / 5;
console.log(div);
div /= 2; // div = div / 2
console.log(div);

// exponents
let square = 5 ** 2
console.log(square);
square **= 2; // square = square ** 2
console.log(square);


//  modulo
let remainder = 17 % 4;
console.log(remainder);
remainder %= 2; // remainder = remainder % 2
console.log(remainder);


// floor division - no built in operator, need to use built in math module
console.log(Math); // needs to be a capital letter 'Math'
let floor = Math.floor(19/4);
console.log(floor)



// + operator w a number and string
let myString = 'my companies are a total of ';
let myInt = 5;

let addedString = myString + myInt;
console.log(addedString);
console.log(typeof addedString);


console.log(square);

let quizOne = square + '4'
console.log(quizOne);

// ;



// js comparisons
console.log(5 == 5);
console.log(5 != 5);
console.log(5 == '5'); // this gives true bc js chekcs if it can add them ALLOWS TYPE CONVERSION
console.log(5 === '5'); // triple equal sign checks for equality DOES NOT ALLOW TYPE CONVERSION


console.log('booleans check');
console.log(1 == true);
console.log(0 == true);

console.log('10' > 5);


// when js compares objects it looks for REFERENCE ONLY!
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

// returns false bc they are OBJECTS, and they are NOT the same object
console.log(arr1 == arr2); 
console.log(arr1 === arr2);

let animals = ['cat', 'bird', 'dog'];
let newerArr = animals;

// first one below works bc it compares two versions of the same object
console.log(animals == newerArr);
console.log(animals == ['cat', 'bird', 'dog']);
console.log(newerArr == ['cat', 'bird', 'dog']);


animals.push('horse');
console.log(newerArr);


// >
// <
// >=
// <=
// == equal, allow type conversion
// === equal, DO NOT allow type conversion
// != not equal, allow type conversion
// !== not equal, DO NOT allow type conversion

// 



// control flow

// if (condition){code to execute};

let newNumber = 30;

console.log('Begin');
if (newNumber > 65){
    console.log('Senior')
} else if (newNumber > 17) {
    console.log('Adult')
} else {
    console.log('Child')
};
console.log('End');

// ternary operator - (condition) ? value if true : value if false
// age_group =  'Adult' if age > 17 else 'Child'

let ageGroup = (newNumber > 17) ? 'Adult' : 'Child';
console.log(ageGroup);

// PYTHON: age_group_2 = 'Senior' if age > 65 else 'Adult' if age > 17 else 'Child'

let ageGroup2 = (newNumber > 65) ? 'Senior' : (newNumber > 17) ? 'Adult' : 'Child'
console.log(ageGroup2);


// && - and
// || - or

newNumber = 30;
if (newNumber > 18 && newNumber < 40){
console.log('Young Adult');
};

if (newNumber < 18 || newNumber > 65){
console.log('Discount');
};

// 



/*
    loops
*/

// standard for loop
// for (counter; expression/condition; increment/decrement for counter){code to execute each loop}

console.log('Loop has started');

for (let i = 0; i <= 20; i++){
    console.log(i)
};
console.log('Loop has ended');


let colors = ['red', 'green', 'purple', 'pink'];

for (let i = 0; i < colors.length; i++){
    console.log(i, colors[i]);
};


// for...in -- used to loop over the values of an object or index and value of array
let teams = {
    mlb: 'Red Sox',
    nba: 'Lakers', 
    nfl: 'Saints',
    nhl: 'Predators'
};

// for (let variable 'in' obj){code to execute for each prop in object}
for (let t in teams){
    console.log(t, teams[t]);
};

// for...of -- used to loop over the elements in an Array
let planets = ['Mercury', 'Mars', 'Earth', 'Uranus']
for (let p of planets){
    console.log(p);
};

// 
// while loop
// while (condition){code to execute while condition is true}

let num1 = 1;

while (num1 < 10){
    console.log(num1);
    num1++;
};


// do while loop...DO the first portion at least once
// if the while condition is still true, continue the while loop

// do {code to execute} while (condition)

let k = 1;

do {
    k*= 2;
    console.log(k);
} while (k < 10);


// do {
//     var firstName2 = prompt('what is your name?')
// } while (firstName2 !== 'alex');

