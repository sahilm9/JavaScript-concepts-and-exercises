// Objects and Functions
// Objects and the dot
/*
Object is a collection of Name-value pairs,
Value can be a primitive 'property'
Value can also be another Object 'property'
Objects can also contain functions, in those cases, they are called methods
The core object will have an address in memory and it will have references to these properties and methods
*/

var person = new Object(); // Not the perfered way to create an object but this is also a way
/*Let's add properties
Computed Member Accees [] operator, inside of it, we put name of the value we are trying to locate in memory, it's going to create a spot in the memory and person Object is going to get a reference for 'firstName' and that's going to be a primitive, string and so it is called a property
 */
person["firstName"] = 'Sahil';
/*
Computed Member Access has an associativity of left to right. Often used to dynamically access the property. The operator takes the person object and it looks for the firstName in it
*/
person['lastName'] = 'Mokkapati';
/*
The neat thing about the operator is we can set a string and then use the string to access the property name
*/

var firstNameProperty = 'firstName';
console.log(person[firstNameProperty]); // log's Sahil


/*
More common operator is dot(.), It's associativity is also left to right.Takes 2 parameters, left is object we are looking at and right is name of the property
*/
console.log(person.firstName); // log's Sahil

person.address = new Object(); // creates a sub object
person.address.street = '649 Bend Dr';
// first . Operator finds person in memory and then second . operator finds address of person and look for street , in this case, it doesn't find it but as we are setting a value it creates street and set's the value

console.log(person.address); // using . operator
console.log(person['address']); // using CMA operator

// Objects and Literals
/*
Object Literal, its just {}, prefered way to create an object
*/

var personDetails = {
  firstName:'Sahil',
  lastName:'Mokkapati',
  address: { // Nested Object
    street: '649 Bend dr',
    city: 'Sunnyvale',
    state: 'CA'
  }
};
console.log(personDetails);

// We can create object on the fly
function greet(personDetails){
  console.log('Hi ' + personDetails.firstName);
}

greet(personDetails);


greet({firstName: 'John', lastName: 'Doe'});// Object literal syntax helps to create object on the fly


// JSON and Object Literals
var objectLiteral = {
  firstName: 'Sahil',
  isAProgrammer: true
}
console.log(objectLiteral);
/* Now a days, we pretty much send the data via JSON format, It's a string of data, looks like object literal syntax but with some differences, in JSON, properties have to be wrapped in quotes, this is valid javascript code, properies can be wrapped in quotes in object literal syntax but they have to be wrapped in quotes in JSON. Technically JSON is subset of object literal syntax, anything that is JSON valid is also Object literal syntax but not the other way around
*/

console.log(JSON.stringify(objectLiteral)); // converts object to JSON
console.log(JSON.parse('{"firstName":"Sahil", "lovesJavaScript": true}')); // Converts JSON to JavaScript object


// Functions are Objects
/*
In JavaScript, functions are Objects
First Class Functions: Everything you can do with other types you can do with functions. Assign them to variables, pass them around, create them on fly
- A function is a special kind of object, it has all the features of a normal object and it has some special additional properties.
- We can attach properties and methods to a function. Why? Becuase in JavaScript, functions are just Objects
- You can attach a primitive(name-value pair), object, functions
- It has 2 additional important properties, they are
a) Name
optional, can be anonymous( Function in JS doesn't have to have a name)
b) code property, the actual lines of code which we have written
- It isn't like code we write is the function, it is just one of the properties of the function, what's special about that property is that it's invocable
*/
function greet(){
  console.log('Hi');
}

greet.language = 'English'; // Just added property to a function, because in JavaScript, functions are objects
console.log(greet.language); //log's English


// Function Statements and Function Expressions
/*
Expression: A unit of code that results in a value, it doesn't have to save to a variable
*/

greetEnglish()// This works as function is available to us ahead of time
function greetEnglish(){ /* funciton statement, when it is run, it doesn't result in a value until function is executed, it is just placed in memory and it is available ahead of time
When this is run in executoion phase it doesn't do anything where as below, creates a function object
*/
  console.log('Hello');
}

// anonymousGreet(); // This wouldn't work and would result in undefined is not a function, because in creation phase, anonymousGreet is assigned undefined and in execution phase below is executed to result in function object
// Function expressions aren't hoisted
var anonymousGreet = function(){ /*
  Functions in JavaScript are objects, We are creating an object on the fly and setting it to a varibale, anonymousGreet contains a function object
  - Function's name is anonymous, we don't have to name it because we already have a variable poitning towards this function object
  - This function has a code property, how do we invoke this code property? Using the variable which points to this function object
  - This is an expression, because it results in a value, we end up in function object
  */
  console.log('Hello from anonymousGreet');
}
anonymousGreet();

function log(a){
  // can be invoked by a();
    console.log(a);  // log's function which is passed
}

log(function(){
console.log('Hi')
}); //  It works like object literal, creating function on the fly and passing as parameter to another function

// Objects, functions, and 'this'
/*
Every execution context has variable environment, reference to outer enviroment and JavaScript engine 'this', this pointing will depend on how the function is invoked
*/

console.log(this); // Window , this points to global object and it is window in browser

function someFunction(){
  console.log(this); // It will still point to global object
}
someFunction(); // Results in creation of executon context and it creates 'this'

var anotherFunction = function(){
  console.log(this); // It will still point to global object(window in this case)
}

anotherFunction();
// Whenever we create a function, function expression or statement, then 'this' will point to global object
// if value is primitive, it's called property, if value is function, its called methods

var abc = {
  name: 'The abc object',
  log: function(){ // In the case where function is actually a method attached to an object, then 'this' will point to that object
  this.name = 'Updated abc object';
    console.log(this);
    // Below is a caveat
    var setName = function(newName){
       this.name = newName; // attaches .name property to window object
    }
    setName('Updated abc object again');
    console.log(this); // logs 'Updated abc object'
  }
}
abc.log();
// So, one of the solutions to the problem is
var abcd = {
  name: 'The abcd object',
  log: function(){ // In the case where function is actually a method attached to an object, then 'this' will point to that object
  var self = this; // By reference, self will be poiting to same location as this(abc object)
    self.name = 'Updated abcd object';
    console.log(self);
    // Below is a caveat
    var setName = function(newName){
      self.name = newName;
    }
    setName('Updated abcd object again');
    console.log(self); // logs 'Updated abc object again'
  }
}
abcd.log();

// Immediately Invoked Function Expression

var greetFunc = function(name){
  console.log('Hello '+ name);
}
greetFunc('Sahil'); // log's Hello Sahil

// Using an Immediately Invoked Function Expression(IIFE)
var greeting = function(name){
  return 'Hello ' + name;
}('Sahil'); // Function object will be created and then it will be invoked and that value will be returned and that will be set to greeting
console.log(greeting); // Hello Sahil
// We only use parenthesis with expression, so JavaScript engine knows that anything we put in parenthesis is an expression and it assumes that function we have written in parenthesis is a function expression and it creates function object on the fly
// - A function expression wrapped in parenthesis and then we used another parenthesis to actually run it, so we are creating and running funciton all at the same time
(function(name){
  console.log('Hi '+ name + ', I am inside IIFE');
}('Sahil'));  // log's Hi Sahil


// Closures

function greetings(whatToSay){
  return function(name){
    console.log(whatToSay + ' ' + name);
  }
}
greetings('Hi')('Sahil');
var sayHi = greetings('Hi');
sayHi('Sahil');
