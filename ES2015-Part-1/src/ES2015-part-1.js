/*
Introduction
In 1995, Brendan Eich of Netscape was tasked writing programming language for browser, it was initially named Mocha, later LiveScript and finally JavaScript. At that time there was another browser competitor, Internet Explorer which was built by Microsoft in order to compete with Netscape, Microsoft reverse engineered Brendan Eich’s language and named it a JScript since there were now 2 different languages for 2 different browsers. It became difficult to build applications for both, so Brendan Eich looked looked for an organization to help standardize the language to stop this problem. In 1996, European Computer Manufacturers Association or ECMA was brought on to help standardize the language.

In 1997, the first version of ECMAScript called ES1 was released and implemented in browsers, as the language grew, ES2 and ES3 were released in 1998 and 1999 respectively. ES4 never ended up being released and in 2009 a large update to the language was added  with ES5. In June of 2015, another large update to the language came with ES6 but since the popularity of JavaScript was growing so much, TC39 the committee which votes to add new features into the language decided that they would be releasing new changes every so they renamed ES6 to ES2015 and since then new features have been added and will continue to be added to the language

ES 2015 Additions
•	Let, const
•	Template strings
•	Arrow functions
•	Default parameters
•	Rest and spread operators
•	For.. of loops
•	Object shorthand notation
•	Computed property names
•	Object destructing
•	Array destructing
•	Class keyword
•	Super and extends keywords
•	Maps/sets
•	Promises
•	Generators
•	Object, Number, Array methods

*/
/*
const
We can never redeclare a variable by const keyword with same name
*/
const student1  = 'john'
insturctor = 'jane' // TypeError: Assignment to constant variable
// const instructor = 'matt' // Uncaught SyntaxError: Identifier 'instructor' has already been declared
/*
Need to remember
We can still be able to change the value of an array or an object even if we assign it using const keyword
We can't change the value of a primitive ( strings, numbers, boolean, null, undefined and symbol)
const is very helpful when we want to explicitly declare variables that should never be declared
If we are able to change a value, we are still forbidden for creating a new variable with the same name which is useful for variables we only want to declare once.
const doesn't however stop an object from being modified but we can't declare another object with the same name
const doesnt make objects immutable
*/
/*
let
let variable creates block scope
*/
var student2 = 'jane';
if(student2 === 'jane'){
   let funFact = 'Plays with cello';
}
// console.log(funFact); // ReferenceError: funFact is not defined
/*
Before 2015, there were 2 kinds of scopes,global and function. Variables defined in global can be used everywhere and variables defined in functions using var keyword can only be used within functions they were defined in
blocks - if, for, while, do, try, catch and when we use let keyword inside of those blocks, we can create our kind of scope
but when it is used inside the functions, it doesn't behave the same way as var keyword
In JavaScript, we use the term hositing to explain the way what var keyword does
*/
function helloStudent()
{
  //  return john; // Reference Error, john is not defined
   let john = 'HIM';
}
helloStudent();
/*
let does hoist, but we can not access the value  - it is in TDZ( Temporal Dead Zone) (A place where variables are declared but we can't access those values)
When you are working inside of a block and you don't want those variables to be accessed outside the block, use let keyword
*/
for( var i=0; i<5; i++){
   setTimeout(function(){
       console.log(i);
   },1000);
}
for( let i=0; i<5; i++){
   setTimeout(function(){
       console.log(i);
   },1000);
}
/*
let allows us to declare vairables that are limited in scope in which they are used and a new variable is created for each iteration in the loop, unlike var keyword which defines the variavle globally
let keyword will hoist however referencing that variable before declaration will result in Temporal dead Zone
We can't redeclare the same variable using the let keyword //  Identifier 'a' has already been declared
*/

/*
Template Strings
*/
var firstName = 'Sahil';
var lastName = 'Mokkapati';

'Hello ' + firstName + ' ' + lastName; // error prone

`Hello ${firstName} ${lastName}`;// much nicer
// Template strings also allows us to write multi line strings

//"
//Hello , It doesn't not work
//"

`Hello
How
Nice
is
This`;


/*
Arrow functions
*/

// ES5
var add = function(a,b){
   return a+b;
}
// Replace the keyword 'function' with '=>'
var add = (a,b) =>{
   return a+b;
}
/*
One-line arrow functions
- You can put arrow functions on one line
But you must omit the return keyword as well as curly braces
*/

var add = (a,b) => a+b;

[1,2,3].map(function(value){
   return value *2;
}); // [2,4,6]

// with arrow functions

[1,2,3].map(value => value*2); // [2,4,6];

function doubleFilter(arr){
   return arr.map(function(value){
       return value*2;
   }).filter(function(value){
       return value%3 ===0;
   })
}

doubleFilter([5,10,15,20]); // [30]

var doubleAndFilter = arr => arr.map(value => value*2).filter(value => value%3==0);
doubleAndFilter([5,10,15,20]); // [30]

/*
we only have one parameter, we do not need parenthesis around it with arrow functions
Arrow functions are not exactly the same as regular functions
Arrow functions do not get their own 'this' keyword
Inside of an arrow function, the keyword this has its original meaning from the enclosing context
The fact that arrow functions do not have their own this keyword can be quite helpful - you just need to understand when you might NOT want that
*/

var student = {
   firstName: 'Sahil',
   sayHi: function(){
       setTimeout(()=>{
           console.log(`Hello ${this.firstName}`);
       },1000);
   }
}
student.sayHi(); // Hello Sahil
/*
Value of keyword 'this' inside of setTimeout is it's enclosing context which is student object. Since arrow function does not get it's own keyword 'this', we don't have to worry about explicitly setting its value
We used both the function keyword and an arrow function, why? Why didn't we arrow function for sayHi() as well?
If we use arrow function for sayHi(), it will not have its own keyword this and the keyword this will not refer to the instructor object anymore(in the above case, it will be global object)
arrow functions do not get their keyword 'arguments' as well
*/

// var add = (a,b) => arguments; //ReferenceError: arguments is not defined
/*
One more note about 'arguments'
An argument keyword can be accessed if the arrow function is inside of another function(it will be the outer functions arguments)
If you really need the arguments to an arrow function, use the rest operator
*/

function outer(){
   return innerFunction = () =>{
       return arguments;
   }
}
outer(1)(2);// only print out[1]

/*
When NOT to use Arrow Functions
Arrow functions should never be used as methods in objects since we will get the incorrect value of the keyword this. ES2015 provides a better alternative
*/

var johnDetails = {
   id: 1,
   sayHi: () =>  `John's id is ${this.id}`
}
johnDetails.sayHi(); // John's id is undefined

// *********************** Exercise ***********************
/*
Refactor the following code to use ES2015 arrow functions - make sure your function is also called tripleAndFilter

    function tripleAndFilter(arr){
      return arr.map(function(value){
        return value * 3;
      }).filter(function(value){
        return value % 5 === 0;
      })
    }
*/
let tripleAndFilter = arr => arr.map(value => value*3).filter(value => value%5 ===0);
/*
Refactor the following code to use ES2015 arrow functions. Make sure your function is also called doubleOddNumbers

   function doubleOddNumbers(arr){
       return arr.filter(function(val){
           return val % 2 !== 0;
       }).map(function(val){
           return val *2;
       })
   }
*/
let doubleOddNumbers = arr => arr.filter(val => val%2 !==0).map(val => val*2);
/*
Refactor the following code to use ES2015 arrow functions. Make sure your function is also called mapFilterAndReduce.

    function mapFilterAndReduce(arr){
      return arr.map(function(val){
        return val.firstName
      }).filter(function(val){
        return val.length < 5;
      }).reduce(function(acc,next){
        acc[next] = next.length
        return acc;
      }, {})
    }
*/
let mapFilterAndReduce = arr => arr.map(val => val.firstName).filter(val => val.length<5).reduce((acc,next) => {
   acc[next]= next.length;
   return acc;
},{})
/*
Write a function called createStudentObj which accepts two parameters, firstName and lastName and returns an object with the keys of firstName and lastName with the values as the parameters passed to the function.
*/
let createStudentObj = (firstName,lastName) => ({firstName:firstName, lastName:lastName});
/*
Refactor this code to use arrow functions to make sure that in 1000 milliseconds you console.log 'Hello Colt'

    var instructor = {
      firstName: "Colt",
      sayHi: function(){
        setTimeout(function(){
          console.log('Hello ' + this.firstName)
        },1000)
      }
    }
*/
var janeDetails = {
   id: 'Jane',
   sayHi: function(){
       setTimeout(()=>{
           console.log(`Jane's id is ${this.id}`);
       },1000);
   }
}
janeDetails.sayHi();

// Default Parameters
function add(a,b){
   return a+b;
}
add(); // NaN because a is undefined and b is undefined

function subtract(a=10,b=20){
   return b-a;
}
subtract(); // 10
subtract(4); // 16
subtract(1,2); // 1

// For..of loop
/*
A new loop to easily iterate over arrays and newer data structures in ES 2015
Syntax is very similar to 'for in' loop
'for in' loop is traditionally used to iterate over keys in an object but it isn't the most helpful for iterating over values in an array, this is where for..of helps
*/
var arr = [1,2,3,4,5];

for(let val of arr){
   console.log(val);
}
/*
ES 2015 gives a new primitve data type called symbol, there is a method on symbol called iterator which specifies how a data type is iterated over. Some built in data types like strings, arrays(special kind of objects), as well as 2 new data structures like maps and sets have built in symbol.iterator function however objects do not, this means we can't use for..of loop to iterate over objects
for( val of {}) // TypeError, because we are trying to invoke a function that does not exist.
*/


// Rest Operator
/*
Which collects remaining arguments in a function and gives them to us in an array
*/
function printArguments(a,b,...c){
   console.log(a); // 1
   console.log(b); // 2
   console.log(c); // [3,4,5,6,7]
}
printArguments(1,2,3,4,5,6,7);
/*
rest operator always returns an array
is called rest operator 'only' when it is a parameter to a function
Is accessed without ... in a function
a better alternative to using the arguments array-like-object
*/

// general way
function sumArguments(){
   var total = 0;
   for(var i=0; i<arguments.length; i++){
       total+= arguments[i];
   }
   return total;
}
// converting arguments to array
function sumArguments1(){
   var argumentsArray = [].slice.call(arguments);
   return argumentsArray.reduce(function(acc,nextVal){
       return acc += nextVal;
   },0);
}
// using rest operator // ES2015
var sumArguments = (...args) => args.reduce((acc,nextVal) => acc+=nextVal);

sumArguments(1,2,3,4,5,6,7,8,9,0); // 45

// Spread Operator
/*
... are used outside the parameters of a function, then they are called spread operator.
Used on arrays to spread each value out(as a comma separated value).
Useful when you have an array, but what you are working with expects comma separated values
*/
// Suppose we want to create new array with all the values inside of it
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];
var combined = arr1.concat(arr2).concat(arr3); // [1,2,3,4,5,6,7,8,9];
//ES 2015
var combinedES2015 = [...arr1,...arr2,...arr3]; // [1,2,3,4,5,6,7,8,9]
// ES5
var arr =[3,2,4,1,5];
Math.max.apply(this,arr);
//ES6
Math.max(...arr); // Spreads out values as comma separated values

function sumValues(a,b,c){
   return a+b+c;
}
var nums = [12,15,20];
//ES5
sumValues.apply(this,nums);
//ES6
sumValues(...nums); //47

// *********************** Exercise ***********************
// Rest and Spread Exercises
/*
Write a function called smallestValue which accepts a variable number of parameters and returns the smallest parameters passed to the function.
*/
function smallestValue(...args){
  return Math.min(...args);
}
/*
Write a function called placeInMiddle which accepts two parameters, an array and another array. This function should return the first array with all of the values in the second array placed in the middle of the first array.

*/
function placeInMiddle(arr, vals){
  let middle = Math.floor(arr.length/2);
  arr.splice(middle,0,...vals);
  return arr;
};
/*
Write a function called joinArrays which accepts a variable number of parameters (you can assume that each argument to this function will be an array) and returns an array of all of the parameters concatenated together
*/
function joinArrays(...args){
  return args.reduce((acc,next)=> acc.concat(next),[]);
}
/*
Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the even ones.
*/
function sumEvenArgs(...args){
   return args.reduce((acc,next) => next%2 === 0? acc+=next:acc,0);
}
/*
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the parameters passed to the function REVERSED. If you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked.
*/
function flip(fn, thisArg, ...outerArgs){
   return function(...innerArgs){
       var allArgs = outerArgs.concat(innerArgs).slice(0, fn.length);
       return fn.apply(thisArg, allArgs.reverse());
   }
}
/*
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. If you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!
*/
function bind(fn,thisArg, ...outerArgs){
   return function(...innerArgs){
       return fn.apply(thisArg,[...outerArgs,...innerArgs]);
   }
}

// Object Enhancements

var fullName = 'Sahil Mokkapati';
var formalFullName = 'Mokkapati Sahil';
// ES5
var fullNameDetails = {
   fullName: fullName,
   formalFullName: formalFullName
}

// ES2015
// If keys and values have same name, we don't have to repeat the declaration
var fullNameDetails ={
   fullName,
   formalFullName
}

// ES5
var greet = {
   sayHello: function(){
       return `Hi`;
   }
}
// ES 2015, Omit ':' and function keyword
var greet = {
   sayHello(){
       return `Hi`;
   }
}

// Computed Property Names
var id = 'Anumber';
var studentInfo  = {};
// We want to have an object with a key of whatever value firstName is
studentInfo[id] = `A20381239`;

// ES 2015
// We can bracket notation while defining the object
var studentInfo={
   [id] : `A20381239`
}
studentInfo.Anumber; // A20381239

// Object Destructuring
/*
Destructuring - Extracting values from data stored in objects and arrays
*/

var sahilInformation = {
   address: '649 Bend Dr',
   city: 'Sunnyvale, CA'
}
// in ES5
var address = sahilInformation.address;
var city = sahilInformation.city;
/*
Destructing allows to unpack values from arrays or objects into distinct variables
We are creating 2 varibales which are destructured or unpacked from object, we have to name the variables same as the keys we are destructuring
IN ES2015
*/
var {address, city} = sahilInformation;
// If we want different variables names
var {address: addressInfo, city: cityInfo} = sahilInformation;

function createStudent(options){
   var options = options || {};
   var name = options.name || {first:'John', last:'Doe'};
   var isHilarious = options.isHilarious || false;
   return [name.first, name.last, isHilarious];
}

createStudent(); // ['John','Doe',false]
createStudent({isHilarious: true}); // ['John','Doe',true]
createStudent({name:{first:'Sahil', last:'Mokkapati'},isHilarious: true}); // ['Sahil','Mokkapati',true]

function createStudentX({name = {first:'Richard',last:'Doe'}, isHilarious=false} = {}){
   return [name.first, name.last, isHilarious];
}
// We are passing in a destructured object as a default parameter
// We assign as a  default value an empty object so ES2015 knows we are destructing
// If nothing is passed in, we default to the destructured object as the parameter

createStudentX(); // ['Richard', 'Doe', false]
createStudentX({isHilarious:true}); // ['Richard', 'Doe', true]
createStudentX({name:{first:'John', last:'Roe'}}); // ['John','Roe',false]

// ES5
function displayInfo(obj){
   return [obj.name, obj.favColor];
}

var richard= {
   name:'Richard',
   favColor: 'Purple'
};
// If we want to display properties of an object, we pass an object and display properties like above in ES5
// If we know the names and the keys we will be using from the object, we can destructure those keys as parameters
function displayInfo({name, favColor}){
   return [name, favColor];
}
displayInfo(richard); // ['Richard', 'Purple']

/*
Array Destructuring
Destructing helps us to extract values from arrays or properties from objects into distinct variables
*/

//ES5
var arr =[1,2,3];
var a=arr[0]; // 1
var b=arr[1]; // 2
var c=arr[2]; // 3

// ES2015
var [a,b,c] = arr;

function returnNumbers(a,b){
   return [a,b];
}

var first = returnNumbers(5,10)[0]; // 5
var second = returnNumbers(5,10)[1]; //10
// ES 2015
var [firstValue, secondValue] = returnNumbers(5,10);
// ES5
function swap(a,b){
   var temp =a;
   a=b;
   b= temp;
   return [a,b];
}
swap(5,10); // [10,5]

// ES2015
function ES2015Swap(a,b){
   [a,b] = [b,a];
   return [a,b];
}
ES2015Swap(5,10); // [10,5]


// *********************** Exercise ***********************
//  Destructing exercises
/*
Write a function called displayStudentInfo which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object inside of the function.
*/
function displayStudentInfo(obj){
   var {first, last} = obj;
   return `Your full name is ${first} ${last}`;
}
/*
Write a function called printFullName which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object DIRECTLY from the parameters. The output of the printFullName function should be the exact same as the displayStudentInfo function.
*/
function printFullName({first,last}){
   return `Your full name is ${first} ${last}`;
}
/*
Write a function called createStudent which accepts as a parameter, a default parameter which is a destructured object with the key of likesES2015 and value of true, and key of likesJavaScript and value of true.

    If both the values of likesJavaScript and likesES2015 are true, the function should return the string 'The student likes JavaScript and ES2015'.
    If the value of likesES2015 is false the function should return the string 'The student likes JavaScript!'
    If the value of likesJavaScript is false the function should return the string 'The student likesES2015!'
    If both the value of likesJavaScript and likesES2015 are false, the function should return the string 'The student does not like much...'
*/
function createStudent({likesES2015 = true, likesJavaScript = true} = {}){
   var start = 'The student ';
   if(likesES2015&& likesJavaScript){
       start += 'likes JavaScript and ES2015';
   }
   else if(likesES2015){
       start += 'likes ES2015!';
   }
   else if(likesJavaScript){
       start += 'likes JavaScript!';
   }
   else {
       start += 'does not like much...';
   }
   return start;
}

/*
Write a function called reverseArray which accepts an array and returns the array with all values reversed. See if you can do this without creating a new array!
*/
function reverseArray(arr){
   for(var i=0; i<arr.length/2; i++){
       [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]];
   }
   return arr;
}

/*
ES2015 Part 1 recap
-> ES2015 gives us two keywords for declaring variables let, const. Const ensures we can not redeclare a variable and let gives us block scope
-> Easily evaluate variables in strings and create multi-line strings with ES2015 template strings. Don't forget the backticks
-> Create more concise functions using the => syntax, but these functions do not get their own 'this' and 'arguments' keywords
-> Gather arguments to a function as an array using the rest operator and spread out values in array to another value or function ...
-> Write more concise methods and property names using shorthand notation and computed property names
-> Object destructing is very useful for reducing duplication and passing in defualt parameters as a destructured object
-> Array destructing can also be used for swapping variables in an array without a separate swap function
*/