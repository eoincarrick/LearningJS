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
