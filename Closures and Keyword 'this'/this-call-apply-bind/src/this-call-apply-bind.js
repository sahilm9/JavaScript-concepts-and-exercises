/*
Keyword 'this' is determined by how a function is called(Execution Context)
Everytime a function is run, 2 keywords are given to it - 'arguments' and 'this'
'this' Can be determined by four rules(global,object/implicit,explicit and new)
*/
// Rule 1 - Global context, When 'this' is not inside of a declared object
console.log(this); //Global Obejct, in this case, window

function whatIsThis(){
   return this;
}

whatIsThis(); // still window

/*
using "use strict" will prevent us creating global variables like this.
If 'use strict' is used, variablesInThis() will result in TypeError: can't set person on undefined;
*/
function variablesInThis(){
   return this.person = 'Elie'; // attaching values to global object, which is a very bad practise
}
variablesInThis();

// Rule 2 Implicit/Object binding
/*
It states that when keyword 'this' is found inside of declared object, the value of keyword 'this' will always be closest parent object
*/
let person = {
   firstName: 'John',
   sayHi: function(){
       return "Hi " + this.firstName;
   },
   determineContext: function(){
   return this === person;
 }
}

person.sayHi(); // Hi John
person.determineContext(); // true

// What does the keyword 'this' refer to here?
let secondPerson = {
   firstName: 'Jane',
   determineContext: this
}
/*
It refers to window object, but why?
Keyword this is defined when a function is invoked, since there is no function being run here to create a new value of the keyword 'this', so the value of 'this' is still the window
*/
// The Value of this inside a function which is inside
// Nested Objects
var thirdPerson = {
   firstName: 'Sahil',
   sayHi: function(){
       return 'Hi ' + this.firstName;
   },

   determineContext: function(){
       // If a function is created inside a method of an object then 'this' variable inside the below function will POINT TO GLOBAL OBJECT AND NOT THIRDPERSON OBJECT
           return (function(){
               this.firstName = 'Tim'; // attaches the firstName to winow object
               return this === thirdPerson; // false
           }());
   },

   insideObj:{
       sayHello: function(){
       return "Hello " + this.firstName;
       },
       determineContext: function(){
           return this === thirdPerson.insideObj;
       }
   }
}

thirdPerson.sayHi(); // Hi Sahil
thirdPerson.determineContext(); // false

/*
1st rule , if keyword this is not inside of declared object, it will be global object
2nd rule, Implicit binding, the value of this will always be the closest parent object
*/

thirdPerson.insideObj.sayHello(); // Hello undefined
thirdPerson.insideObj.determineContext(); // true
/*
So how can we make 'this' inside of sayHello of insideObj refer to thirdPerson? This is where call, apply and bind comes
*/
// 3rd Rule Explicit Binding
/*
All functions in JavaScript get access to call, apply and bind methods
*/

var fourthPerson = {
   firstName: 'Sahil',
   sayHi: function(){
       return 'Hi ' + this.firstName;
   },

   determineContext: function(){
       // If a function is created inside a method of an object then 'this' variable inside the below function will POINT TO GLOBAL OBJECT AND NOT THIRDPERSON OBJECT, inorder to make 'this' point to fourthPerson, we are using call with 'this'.
           return (function(){
               this.firstName = 'Tim'; // modifies the firstName in thirdPerson
               return this === fourthPerson; // true
           }.call(this)); // setting 'this' to 'fourthPerson'
   },

   insideObj:{
       sayHello: function(){
       return "Hello " + this.firstName;
       },
       determineContext: function(){
           return this === fourthPerson;
       }
   }
}
fourthPerson.sayHi(); // Hi Sahil
fourthPerson.determineContext(); // true
fourthPerson.first;

fourthPerson.insideObj.sayHello.apply(fourthPerson); // Hello tim
fourthPerson.insideObj.determineContext.apply(fourthPerson); // true

// More examples using call
function sayHi() {
   return "Hi " + this.firstName;
}

let sahil = {
   firstName: 'Sahil'
}
let john = {
   firstName: 'John'
}

sayHi.call(sahil); // Sahil
sayHi.call(john); // John
// Another use case for call
/*
Suppose, we want to select all teh div's on a page, but suppose getElementsByTageName returns list of an array like object of div's to us,we can use array methods on it. We can convert an array like object into an array using array.slice method
*/
let divs = document.getElementsByTagName('div');
let divsArray = [].slice.call(divs);

function addNumbers(a, b, c, d) {
   return this.firstName + " just calculated " + (a + b + c + d);
}
addNumbers.call(sahil, 1, 2, 3, 4); // Sahil just calculated 10
addNumbers.apply(john, [1, 2, 3, 4]); // John just calculated 10

// When a function does not accept an array, apply will spread out values in an array for us
let nums = [5, 7, 8, 3];
Math.max([1, 2, 3, 4]); // NaN
Math.max.apply(this, nums); // 8

function sumValues(a, b, c) {
   return a + b + c;
}

let values = [1, 2, 3];
sumValues(values); // 1,2,3 undefined undefined
sumValues.apply(this, values); // 6

/*
Bind , the parameters work like call but bind returns a new function with the context of 'this' bound to the value we pass as the first parameter to bind.
It's useful when we do not know all the arguments we pass to the function which means we do not to invoke the function right away, we just want to return a new function with some of the parameters, it's called partial application
*/

function addNumbers(a,b,c,d){
   return this.firstName + " just calculated " + (a+b+c+d);
}

let sahilCalc = addNumbers.bind(sahil, 1,2,3,4);
sahilCalc();
// With bind, we do not need to know all the arguments up front, we only need to know what the value of keyword 'this' to be.
let johnCalc = addNumbers.bind(john, 1,2);
johnCalc(3,4);
// another common usecase, to set the context of keyword 'this' of a function that will be called at a later time, very commonly, it happens with asynchronous code.
let jane = {
   firstName: 'Jane',
   sayHi: function(){
        setTimeout(function(){
          /*
            Since setTimeout is called at a later point in time, the object it is actually attached to, is window, setTimeout is a method on window object, it accepts a callback function and every function gets keyword 'this', even though it's inside jane object, the context in which setTimeout is executed is actually the global context, we can set the keyword 'this' to jane, since we want to invoke the function at a later point in time, we use bind which just returns the function with keyword set to 'jane'. Inside sayHi, value of keyword 'this' refers to jane object, while passing jane instead of 'this' would also work, if obj name(jane) is changed later, the entire function would break.
          */
              console.log("Hi " + this.firstName);
       }.bind(this),2000);
   }
}
jane.sayHi();// Hi Jane

// Functional Programming
function mapForEach(arr, fn){
   let newArr = [];
   for( var i=0; i<arr.length ; i++){
       newArr.push(fn(arr[i]));
   }
   return newArr;
}

let arr1 = [1,2,3];

let arr2 = mapForEach(arr1, function(item){
   return item *2;
}); // [2,4,6];

let arr3 = mapForEach(arr1, function(item){
   return item >2;
}); // [false, false, true]

let checkPastLimit = function(limiter, item){
   return item < limiter;
}

var checkPastLimitSimplified = function(limiter){
   return checkPastLimit.bind(this,limiter); // Setting the limiter
};

var checkPastLimitSimplified = function(limiter){
   return function(limiter, item){
       return item <limiter;
   }.bind(this, limiter); // Setting the limiter
}; // same as above

let arr4 = mapForEach(arr1, checkPastLimitSimplified(3)); // [true, true, false]

// *********************** Exercise ***********************

/*
Write a function called arrayFrom which converts an array-like-object into an array.
*/
function arrayFrom(arrayLikeObject){
  return [].slice.call(arrayLikeObject);
}
/*
Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.
*/
function sumEvenArguments(){
  return [].slice.call(arguments).reduce((acc,nextVal) => {
    if(nextVal%2 === 0){
      acc += nextVal;
    }
      return acc;
  },0);
}
/*
Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out"
*/
function invokeMax(fn, max){
  let counter = 1;
  return function(){
    if(counter > max) return 'Maxed Out!';
    counter++;
    return fn.apply(this,arguments);
  }
}
/*
Write a function called once which accepts two parameters, a function and a value for the keyword 'this'. Once should return a new function that can only be invoked once, with the value of the keyword this in the function set to be the second parameter.
*/
function once(fn, thisArg){
  let hasBeenCalled = false;
  return function(){
      if(!hasBeenCalled){
          hasBeenCalled = true;
          return fn.apply(thisArg, arguments);
      }
  }
}
/*
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this.If you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked.
*/
function bind(fn, thisArg){
  let outerArgs = [].slice.call(arguments,2);
  return function(){
    let innerArgs = [].slice.call(arguments);
    let allArgs = outerArgs.concat(innerArgs);
    return fn.apply(thisArg, allArgs);
  }
}
/*
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the arguments passed to the function REVERSED. If you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. Flip should return a new function that when invoked takes the correct number of required arguments to that function which are then reversed.
*/
function flip(fn, thisArg){
  let outerArgs = [].slice.call(arguments,2);
  return function(){
    let innerArgs = [].slice.call(arguments);
    let allArgs = outerArgs.concat(innerArgs).slice(0, fn.length).reverse();
    return fn.apply(thisArg, allArgs);
  }
}

/*
The 'new' keyword and recap
The keyword 'this' is a reserved keyword in JavaScript and its value is determined at execution
It is either set using the global context, object binding, explicit binding or the new keyword
when set in the global context in a function, it is either the global object(window if in the browser) or undefined( if we are using strict mode)
To explicitly set the value of the keyword 'this', we use call, apply or bind
We can also use the 'new keyword to set the context of 'this' which we weill discuss when we talk about Object Oriented Programming
*/

