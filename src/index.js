// LEARNING JS AGAIN FOR BETTER UNDERSTANDING

var as = Symbol("foo");
console.log(String(as));

//object
var myCar = {
  make: "Ford",
  model: "Mustang",
  speed: "10000000m/s",
  color: "black",
  selfDrive: false
};

console.log(myCar);

// Garbage Collection

//* Memory allocation is done automatically
//* As long as reference exist, there will not be any cleaning
// or garbage cllecting
//* If a location is unreachable then that will be collected
// or released as garbaage.

//Example

let isThis = 6;
isThis = null;
console.log(isThis);

//By explaining myself, "isThis" had a value of "6", then later
// gave it a value of "null". Now since "isThis" is now having
// a value of "null", it is not referencing the "6"
// anymore, thus the location is unreachable. then
// by the Garbage Collection algorithm, the location
// will be cleaned or collected.

// Function
// A fucntion is a set of statement that perform a task
// or calculate a value

function greetMe() {
  console.log("Hello World");
}

// So whenever we set an instruction for a function to do,
// we always have to call it or pass it to an event.

greetMe();

//Since we have called the fucntion, the task will be
// completed or run, and will show up in the console.

//Fucntion as takes parameter,
function greetings(name) {
  // As you can see, the function "greetings()" has a value
  // name as in "greetings(name)", now there is no data inside
  // this parameter, so in-order to pass a data-value inside of it
  // we need to call the function like "greetings('Eoin Carrick')".

  console.log(`Hello ${name}`);
}

greetings("Eoin Carrick"); //called

// Note to me
// A function can have more than three parameters like below

function greeting(name, age, gender, color, hairColor, eyeColor) {
  console.log(
    `Hello ${name}, do you remember when we were ${age}, the ${gender} guy in the class with the ${color} skin, ${hairColor} hair, and the weird ${eyeColor} eyes?`
  );
}

greeting("Eoin Carrick", 12, "male", "blue", "red", "orange"); //Arguments
// Therefore the parameter is more like declaring a variable
// And the argument is like assigning values to the variable
// Like this
var name = "Eoin Carrick";
var age = 12;
var gender = "male";
var color = "blue";
var hairColor = "red";
var eyeColor = "orange";
console.log(`${name}, ${age}, ${gender}, ${color}, ${hairColor}, ${eyeColor}`);
//By explaining it like this myself, I've understood it better.

// Passing fucntion as argument to another function in JS

function foo(x, y, z) {
  console.log("This is foo", x, y, z);
}

function a() {
  console.log("This is a");
  return "This is the return of a";
}

var b = 10;
var c = 20;

foo(a(), b, c);

/////////////////////////////////////////////////////////////////////
//ArrayMehtods //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//JS Array Filter Method

// So from my understanding, the correct syntax for the "ArrayMethod" is
// "const String = objectName.ArrayMethod(function(item, index){
// return aStatement
// })"
// Then they simplified it to "const string = objectName.Arraymethod((item, index) => {return aStatement}
// then further made to "const String = objectName.ArrayMethod((item, index)=> (item,index))"

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male"
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female"
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male"
  }
];

// In this filter method we are trying to display an object
// that has a "char.mass" more or greater than "100".
const moreThan100 = characters.filter((char) => {
  return char.mass > 100;
});
console.log(moreThan100);

//Now in the "characters" contains  a set of objects and
//each object has a value. Now with the "Filter Method", we
// are able to take some of these objects off if they don't
// meet a certain condition.
// The above examples filter only "chatracter.mass" that are "more than 100".
// Meaning it returns any number that is greater than 100, and
// removes objects with "character.mass" of less than 100.

// In this filter method we are trying to display an object
// that has a "char.gender" strictly equla to "male".
const getGender = characters.filter((char) => {
  return char.gender === "male";
});
console.log(getGender);

// In this filter method we are trying to display an object
// that has a "char.height" more or greater than "170".
const getHight = characters.filter((char) => {
  return char.height > 170;
});
console.log(getHight);

// In this filter method we are trying to display an object
// that has a "name.length" more or greater than "14".
const getLength = characters.filter((char) => {
  return char.name.length > 14;
});
console.log(getLength);

// In this filter method we are trying to display an object
// that has a "char.eye_color" more or greater than "red".
const getEyeColor = characters.filter((char) => {
  return char.eye_color === "blue";
});
console.log(getEyeColor);

//JS Array Map Method

const namesOfPeople = [
  "Bismark",
  "Mary",
  "Gwen",
  "Eoin",
  "Carrick",
  "Michael",
  "John",
  "Rita",
  "Doe",
  "Eugene",
  "Eric",
  "Theoplius",
  "Essel",
  "Rocky",
  "Sarah"
];

const nlen = namesOfPeople.map((len) => len.length);
console.log(nlen);

//Examples For Understanding the index, item, and array
// let numLength = namesOfPeople.length - 1;
// console.log(numLength);
// const returnIndex = namesOfPeople.map((item, index) => index);
// console.log(
//   `Here is the number from ${returnIndex.filter(
//     (n) => n === 0
//   )} to ${returnIndex.filter(
//     (n) => n === numLength
//   )}, therefore the second parameter is a "number index".`
// );

const character = [...characters];
console.log(character[0].name.split(" ")[0]);

// In this Map method we are trying to display the "names"
// of all the value inside the "character".
const getName = character.map((char) => char.name);
console.log(getName);
///////////////////////////////////////////////////////////////////////
//Explaining The Code Above
// Now the "character" is now having the same data to "characters"
// therefore, the Map Array Method, take the callback function, and we name that fucntion as "char"
//so now "char" has the same value as the character, then it letrate through it to give us the
//data or value we want.
///////////////////////////////////////////////////////////////////////

// In this Map method we are trying to display the height
// of all the value inside the "character"
const getTheHight = character.map((char) => char.height);
console.log(getTheHight);

// In this Map method we can also display name and height
// of all the value inside the "character"
const minifiedRec = character.map((char) => ({
  name: char.name,
  height: char.height
}));
console.log(minifiedRec);

// In this Map method we are trying to display the first name
// of all the value inside the "character"
const getFirstName = character.map((char) => char.name.split(" ")[0]);
console.log(getFirstName);

// Array Some methods

// The ".some" array is an array that only, only returns a true or false
// when a certain condition is met. So the only thing that ".some" array does,
// is to check if inside a block statement, the code that's been excuted is true or false

// Is there at least one male character?
const oneMale = character.some((char) => char.gender === "male");
console.log(oneMale);

// Is there at least one character with blue eyes?
const oneWithBlueEye = character.some((char) => char.eye_color === "blue");
console.log(oneWithBlueEye);

// Is there at least one character taller than 300?
const moreThan300 = character.some((char) => char.height > 300);
console.log(moreThan300);

// Is there at least one character that has mass less than 50?
const lessThan50 = character.some((char) => char.mass < 50);
console.log(lessThan50);

// Array Method: sort()

// Sort by name
// Sort by mass
// Sort by height
// Sort by gender
