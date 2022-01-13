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

//JS Array Filter Method

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
  return char.eye_color === "red";
});
console.log(getEyeColor);

//JS Array Map Method+
