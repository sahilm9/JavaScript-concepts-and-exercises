
/*
Introduction to class keyword
What is class keyword?
A new reserved keyword provided by ES2015
The class keyword creates a constant - can not be redeclared
The class keyword is an abstraction of constructor functions and prototypes. JavaScript does not have built in support for object oriented programming
The class keyword does not hoist, be sure to declare it at the top of the file
Still use 'new' keyword to create objects
*/

//ES5
function Student(firstName,lastName){
   this.firstName = firstName;
   this.lastName = lastName;
}
// ES5 to add methods to constructor function
Student.prototype.isStudent= function(obj){
   return obj.constructor === Student;
}

var s1 = new Student('Sahil','Mokkapati');
s1.isStudent(s1); //true

// ES2015 Object Oriented
class AnotherStudent{
   // constructor is a name of a function and this function will be run when class is invoked using new keyword
   constructor(firstName,lastName){
       this.firstName = firstName;
       this.lastName = lastName;
   }
   // In ES2015, we place the methods inside of a class, these methods can be used by every single object created from the class, we call these instance methods,since class creates objects or instances
   sayHello(){ // placed inside of class keyword
       // no 'function' keyword - similar to object shorthand notation
       // Under the hood it is placing methods on the prototype object
       return `Hello ${this.firstName} ${this.lastName}`;
   }

   // ES2015, to add properties and methods directly on to a class
   // These properties and methods are called statics and makes use of keyword 'static'
   // to add a static method
   static isStudent(obj){
       return obj.constructor === AnotherStudent;
   }
}
// In Object Oriented Programming when we invoke or create an object from a class, we call it instantiation or creatig instance
// If we try to create an object from a class, we get typeerror
// In OOP, when we invoke or create an object from a class, we call it instantiation or creating an instance. If we try to create an object from class with 'new' keyword, we will get TypeError
var john = new AnotherStudent('John', 'Doe');
AnotherStudent.isStudent(john); // true
AnotherStudent.isStudent([]); // false
// When are static methods, sometimes we don't want every object created from class to have its own methods, specifically when we want to use those methods without creating objects from the class. Some of the static methods are Array.isArray(), Object.create(), Object.freeze() to prevent an object from being modified

// *********************** Exercise ***********************
// Class exercise
/*
Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.
Add an instance method called multiplyFavoriteNumber that accepts one parameter and returns the product of the parameter multiplied with the favoriteNumber property on a person object.
*/
class Person{
   constructor(firstName,lastName,favoriteColor,favoriteNumber){
       this.firstName = firstName;
       this.lastName = lastName;
       this.favoriteColor = favoriteColor;
       this.favoriteNumber = favoriteNumber;
   }
   multiplyFavoriteNumber(num){
       return num*this.favoriteNumber;
   }
}

// Inheritance with ES2015
// IN ES5
function Person1(firstName,lastName){
   this.firstName = firstName;
   this.lastName = lastName;
}

Person1.prototype.sayHello = function(){
   return `Hello ${this.firstName} ${this.lastName}`;
}
// I would like Person1.sayHello method to be accessible to objects created from Student1 constructor
function Student1(firstName,lastName){
   this.firstName = firstName;
   this.lastName = lastName;
}

var p1 =  new Person1('John', 'Roe');
p1.sayHello(); // Hello John Roe

var s1 = new Student1('Richard', 'Doe');
Student1.prototype = Object.create(Person1.prototype);
Student1.prototype.constructor = Student1;

/*
Set the prototype property of a constructor to be an object created from another prototype property
Reset the constructor property on a constructor function
IN ES2015

If one class extends another, it will have all the methods of that class which it extends from

*/
class Person2{
   constructor(firstName,lastName){
       this.firstName = firstName;
       this.lastName = lastName;
   }
   sayHello(){
       return `Hello ${this.firstName} ${this.lastName}`;
   }
}

class Student2 extends Person2{

}
var s2 = new Student2('Mary','Doe');
s2.sayHello(); // Hello Mary Doe
Student2.prototype.constructor === Student2; // true


// Super, reserved keyword to remove duplication in constrcutor function
// IN ES5
function Person3(firstName,lastName){
   this.firstName = firstName;
   this.lastName = lastName;
}

Person3.prototype.sayHello = function(){
   return `Hello ${this.firstName} ${this.lastName}`;
}

function Student3(){
   Person3.apply(this,arguments);
}

// IN ES2015

class Person4{
   constructor(firstName,lastName){
       this.firstName = firstName;
       this.lastName = lastName;
   }
   sayHello(){
       return `Hello ${this.firstName} ${this.lastName}`;
   }
}

class Student4 extends Person4{
   constructor(firstName,lastName,favoriteColor){
       super(firstName,lastName);
       // The idea behind super is to find a method by the same name in the parent class or class which has passed down methods and properties to a child class
       // In this case, Person is parent class and student is the child class in our constructor method
       // In the student class we will use super which will invoke a method by the same name in the Person class
       // Super can only be used if a method by the same name is implemented in the parent class
       // When you want to add additional instance variables to a class that is inherting from another class you need to use the constructor
       // If you are only using extends but try to add another instance to the constructor a reference error is thrown
       // Super needs to be included in the constructor of the child class along with the new instance you are trying to create
       this.favoriteColor = favoriteColor;
   }
   sayHi(){
       return `Hi ${this.firstName} ${this.lastName}`;
   }
}
var s4 = new Student4('Janie', 'Doe');
s4.sayHi(); // Hi Janie Doe
s4.sayHello(); // Hello Janie Doe

// *********************** Exercise ***********************
// Inheritance and Super
/*
Create a class for for a Vehicle. Each vehicle should have a make, model and year property.
Add an instance method called start which returns the string "VROOM!"
Add an instance method called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property
*/
class Vehicle{
   constructor(make,model,year){
       this.make = make;
       this.model = model;
       this.year = year;
   }
   start(){
       return `VROOM!`;
   }
   toString(){
       return `The make, model, and year are ${this.make} ${this.model} ${this.year}`;
   }
}
/*
Create a class for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype
*/
class Car extends Vehicle{
   constructor(){
       super(...arguments);
       this.numWheels = 4;
   }
}

/*
Create a class for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype
*/
class Motorcycle extends Vehicle{
   constructor(){
       super(...arguments);
       this.numWheels =2;
   }
}
/*
-> ES 2015 'class' Keyword recap
-> Qucikly create constructor functions and prototype methods using the class keyword
-> Add class methods using the static keyword
-> Implement inheitance using the extends and super keywords
-> ES0215 Class syntax is an abstraction of using functions and objects
*/

// Maps
/*
Also called 'hash Maps' in other languages
Until ES2015 - objects were replacements for maps
Similar to objects, except the keys can be any data type.
Data type of JavaScript objects is always a 'string' for keys
Objects are similar to maps in that both let you set keys to values, retreive those values, delete keys and detect whether something is stored at a key.
created using the new keyword
*/
var firstMap = new Map;
firstMap.set(1, 'Sahil');
firstMap.set(false, 'a boolean');
firstMap.set('nice', 'a string');
firstMap.delete('nice');
firstMap.size;  // 2
// Keys can be any type
var arrayKey = [];
firstMap.set(arrayKey , [1,2,3,4,5]);

var objectKey = {};
firstMap.set(objectKey, {a :1});

// Extarcting values
firstMap.get(1); // 'Sahil'
firstMap.get(false); // 'a boolean'
firstMap.get(arrayKey); // [1,2,3,4,5]
firstMap.get(objectKey); // {a:1}

// Iteration over map
firstMap.forEach(v => console.log(v));
// Sahil
// a boolean
// [1,2,3,,4,5]
// {a:1}
// maps implement a Symbol.iterator which means we can use a for..of loop!

// firstMap.values(); // MapIterator of values
// firstMap.keys(); // MapIterator of keys

/*
Why use maps?
Finding the size is easy -  no more loops or Object.keys()
The keys can be of any data type!
You can accidentally overwrite keys on the Object.prototype in an object you make - maps do not have that issue
Iteratig over keys and values in a map is quite easy as well

When to use maps?
If you need to look up keys dynamically( they are not hard coded strings)
If you need keys that are not strings
If you are frequently adding and removing key/value pairs
Are key-value pairs frequently added or removed?
If you are operating on multiple keys at a time

WeakMap
Similar to a map, but all keys MUST be objects
Values in a WeakMap can be cleared from memory if there is no reference to them
More perfrmant than maps but can not be iterated over
*/

/*
Sets
A data structure in which all the values are unique
Any type of value can exist in a set
created using the new keyword
*/
var s = new Set;
// can also be created from an array
var s2 = new Set([3,1,4,1,2,1,5]); // {3,1,4,2,5}
s.add(10); // {10}
s.add(20); // {20,10}
s.add(20,10); // {20,10}
s2.size; // 5
s.size; // 2

s.has(10); // true
s.delete(20); // true
s.size; // 1

s2[Symbol.iterator]; // function(){}....
// we can use a for... of loop
/*
WeakSet
similar to a set, but all values must be objects
values in a weakset can be cleared from memory if there is no refernece to them
more performant than sets, but cant be iterated over
*/

// *********************** Exercise ***********************
// Sets and Maps exercises
/*
create a class called MessageBoard, in constructor function, you should assign two properties for each object created from the MessageBoard class. The first should be a property called messages which is an empty Map, and the second is a property called id which has a value of 1.
*/
class MessageBoard{
   constructor(){
       this.messages = new Map;
       this.id = 1;
   }
/*
Add a method called addMessage which accepts a string. The function should add a key and value to the messages map with a key of whatever the value of this.id is and a value of whatever the string is that is passed to the function. The function should return the object created from the class so that the method can be chained.
*/
   addMessage(message){
       this.messages.set(this.id, message);
       this.id++;
       return this;
   }
/*
  Add a method called findMessageById which accepts a number and returns the message in the messages map with the same key as the number passed to the function. If the key is not found in the messages map, the function should return undefined.
*/
   findMessageById(key){
       if(this.messages.has(key)){
           return this.messages.get(key);
       }
   }
/*
 Add a method called findMessageByValue which accepts a string and returns the message in the messages map with the same value as the string passed to the function. If the value is not found in the messages map, the function should return undefined.
*/
   findMessageByValue(message){
       for(let val of this.messages.values()){
           if(message === val) return val;
       }
   }
/*
  Add a method called removeMessage which accepts a number and removes a message in the messages map with a key of the number passed to the function.
*/
   removeMessage(key){
       for(let keyid of this.messages.keys()){
           if(keyid === key){
               this.messages.delete(key);
               return this;
           }
       }
       return `Couldn't find the key`;
   }

/*
Add a method called numberOfMessages which returns the number of keys in the messages map
*/
   numberOfMessages(){
       return this.messages.size;
   }
/*
Add a method called messagesToArray which returns an array of all of the values in the messages map
*/
   messagesToArray(){
       return Array.from(this.messages.values());
   }
}

/*
Write a function called uniqueValues which accepts an array and returns the number of unique values in the array
*/
function uniqueValues(arr){
  return new Set(arr).size;
}
/*
Write a function called hasDuplicates which accepts an array and returns true if there are duplicate values in the array, otherwise it should return false.
*/
function hasDuplicates(arr){
  return new Set(arr).size !== arr.length;
}
/*
Write a function called countPairs which accepts an array of numbers and a number. The function should return the number of unique pairs (two numbers) that sum up to the number passed to the function.
*/
function countPairs(arr, num){
  var count = 0;
  var countPairsSet = new Set(arr);
  for( let val of countPairsSet){
      countPairsSet.delete(val);
      if(countPairsSet.has(num-val)){
          count++;
      }
  }
  return count;
}

// Promises
/*
A promise is a one time guaranteed return of some future value
When that value is figured out - the promise is resolved/fulfilled or rejected
Friendly way to refactor callback code
We have to create a new promise if we want to perform same Asynchronous operation again, this is big difference between promises and callbacks
jQuery implemented its own version of a promise called a deferred. jQuery version 3 now supports native promises
Many JavaScript libraries and frameworks (Node, Angular) use popular promise libarires like q and bluebird
We can now create our own promises
- Created using the new keyword
- Every promise constructor accepts a callback function which contains 2 parameters, resolve and reject
You can call these parameters whatever you like but resolve and reject are most common
these parameters are both functions to be run if the promise is resolved or reject
*/
function displayAtRandom(){
   return new Promise(function(resolve,reject){
       setTimeout(function(){
           if(Math.random() > .5){
               resolve('Yes');
           }
           else{
               reject('No');
           }
       },1000);
   })
}
/*
The returned value from a promise will always contain a .then and .catch method which are functions to be executed when the promise is resolved or rejected
*/
displayAtRandom().then(function(value){
   console.log(value);
}).catch(function(error){
   console.log(error);
})
/*
Returning Promises
Since a promise always returns something that has .then(thenable) - we can chain promises togther and return values from one promise to another
Ajax methods return a promise
*/
var years =[];
$.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb')
.done(function(movie){
   years.push(movie.Year);
   return $.getJSON('https://omdbapi.com?t=shrek&apikey=thewdb');
})
.done(function(movie){
   years.push(movie.Year);
   console.log(years); // ['1997','2001']
})
.fail(function(error){
   console.log(`${error.statusText}: ${error.status}`);
})
console.log(`All done`);
/*
Promise.all
Accepts an array of promises and resolves all of them or rejects once a single one of the promises has been first rejected (fail fast)
If all of the passed-in promises fulfill, Promise.all is fulfilled with an arrray of the values from the passed-in promises, in same order as the promises passed in Promise.all.
Promise.all doesn't guarantee that these promises will be resolved sequentially but it will return the array of promises in same order that you pass them in to the function
You may have seen something like this when .$when in jQuery or Q
The promises don't resolve sequentially, but Promise.all waits for them
*/
function getMovie(title){
   return $.getJSON(`https://omdbapi.com?t=${title}&apikey=thewdb`);
}
var titanicPromise = getMovie('titanic');
var shrekPromise = getMovie('shrek');
var braveheartPromise = getMovie('braveheart');
// The value of these variables is a pending promise, it has not been rejected or resolved
// They are simply a promise for some future value
Promise.all([titanicPromise,shrekPromise,braveheartPromise]).then(function(movies){
   return movies.forEach(function(movie){
       console.log(movie.Year);
       // 1997
       // 2001
       // 1995
   })
})

// *********************** Exercise ***********************
// Promises Exercises
/*
Write a function called getMostFollowers, which accepts a variable number of arguments. You should then make an AJAX call to the Github User API (https://api.github.com/users/) to get the name and number of followers of each argument. The function should return a promise, which when resolved, returns a string which displays the username who has the most followers.
*/
function getMostFollowers(...users){
   let baseURL = `https://api.github.com/users/`;
  let userPromises = users.map(user => $.getJSON(baseURL + user));

   return Promise.all(userPromises).then(function(users){
       var max = users.sort((a,b)=> a.followers< b.followers)[0];
       return `${max.name} has the most followers with ${max.followers}`;
   })
}

getMostFollowers('mojombo','torvalds','JakeWharton').then(function(data){
   console.log(data); // Linus Torvalds have the most followers with 73733
})
/*
Write a function called starWarsString, which accepts a number. You should then make an AJAX call to the Star Wars API (https://swapi.co/ ) to search for a specific character by the number passed to the function. Your function should return a promise that when resolved will console.log the name of the character.

Using the data from the previous AJAX call above, make another AJAX request to get the first film that character is featured in and return a promise that when resolved will console.log the name of the character and the film they are featured in

Using the data from Bonus 1 - make another AJAX call to get the information about the first planet that the film contains. Your function should return a promise that when resolved will console.log the name of the character and the film they are featured in and the name of the planet.
*/
function starWarsString(id){
   let str = '';
   return $.getJSON(`https://swapi.co/api/people/${id}`)
   .then(function(movie){
       str += movie.name;
       let firstFilm = movie.films[0];
       return $.getJSON(firstFilm)
              .then(function(firstMovie){
               str += ` is featured in ${firstMovie.title}, directed by ${firstMovie.director}`;
               let firstPlanet = firstMovie.planets[0];
           return $.getJSON(firstPlanet).then(function(firstPlanet){
               return str+= ` and it takes place on ${firstPlanet.name}`;
           })
       })
   })
}
/*
Generators
A special kind of function which can pause execution and resume at any time
created using '*' after function keyword
When invoked, a generator object is returned to us with the keys of value and done
That object has next with keys of value and done
Value is what is returned from the paused function using the yeild keyword
Done is a boolean which returns true when the function has completed
*/
function* pauseAndReturnValues(num){
   for(let i=0; i< num; i++){
       yield i;
   }
}

var gen = pauseAndReturnValues(5);
gen.next(); // {value: 0 , done: false}
gen.next(); // {value: 2 , done: false}
gen.next(); // {value: 3 , done: false}
gen.next(); // {value: 4 , done: false}
gen.next(); // {value: 5 , done: false}
gen.next(); // {value: undefined , done: true}
// Yield Multiple Values
// We can place multiple yield keyword inside of a generator function to pause multiple times!
function* printValues(){
   yield 'First';
   yield 'Second';
   yield 'Third';
}
var g = printValues();
g.next(); // {value: 'First' , done: false}
g.next(); // {value: 'Second' , done: false}
g.next(); // {value: 'Third' , done: false}
g.next(); // {value: 'undefined' , done: true}

// Iterating over a generator
// Since generators implement a Symbol.iterator property we can use a for..of loop

for(var val of pauseAndReturnValues(4)){
   console.log(val);
}

// Async Generators
// We can use generators to pause asynchronous code
function* getMovieData(movieName){
   console.log('starting');
   yield $.getJSON(`https://omdbapi.com?t=${movieName}&apikey=thewdb`);
   console.log('ending');
}

// The next value returned is a promise, so let's resolve it.

var movieGetter = getMovieData('titanic');
movieGetter.next().value.then(val => console.log(val));

/*
Object.assign and Array.from
Creates copies of objects without the same reference
If we don't start with an empty object, Object.assign will still keep a reference to the object we passed
*/

var obj1 = {name:'John'};
var obj2 = Object.assign(obj1);
obj2.name = 'Sahil';
obj1.name; // Sahil, NOTE: We have to start with an empty object

var obj3 = {name:'Richard'};
var obj4 = Object.assign({}, obj3);
obj4.name = 'Mary';
obj3.name; // Richard

// Object.assign does not create a deep clone, if there are object inside object we are copying those references will still be there

var obj5 = {instructors: ['Joe','Jim']};
var obj6 = Object.assign({},obj5);
obj6.instructors.push('Roe');
obj5.instructors; // obj5 insturtors key can still be changed by obj6

// Array.from // we can easily convert an array like object into an array
var divs = document.querySelectorAll('div');
divs.reduce // undefined, since it is not an actual array
// How this was done with ES5// using call
var converted = [].slice.call(divs)// convert the array like object into an array
converted.reduce // function reduce(){..}

// the from method is invoked directly from Array function, this is another example of static method
// Array.from accepts a value and converts it into an array

var converted = Array.from(divs);
// Array.from works with strings,maps,sets and array like objects

var firstSet =  new Set([1,2,3,4,4,2,1,5]);
var arrayFromSet = Array.from(firstSet);
arrayFromSet; // [1,2,3,4,5];

/*
Additional helpful ES2015 methods
find
Invoked on arrays
Accepts a callback with value, index and array(just like forEach,map,filter etc)
Returns the value found or undefined if not found
*/
var students = [{name:'Sahil'}, {name:'John'},{name:'Jane'},{name:'Joe'}];

students.find(function(curVal){
   return curVal.name === 'Tim';
}) // undefined, if found, returns value found

// findIndex
// Similar to find, but returns an index or -1 if the value is not found

students.findIndex(function(curVal){
   return curVal.name === 'Tim';
}); // -1


// includes
// returns a boolean if a value is in a string, easier than using indexOf
//ES5
'awesome'.indexOf('some')>-1; // true
// indexOf always returns -1 if value we are looking is not inside a string, so commonly write conditional logic that looks like above

'awesome'.includes('some'); // true

// Number.isFinite
// Static method on Number constructor
// A handy way for handling NaN being a type of number, checking to see if a number is not a NaN, since typeof(Number) is NaN

// ES 2015
function seeIfNumber(val){
   if(typeof(val) === "number" && !isNaN(val)){
       return 'it is a number';
   }
}
seeIfNumber(2); // It is a number

function seeIfNumber(val){
   if(Number.isFinite(val)) return 'It is a number';
}
seeIfNumber(4); // It is a number
// There also exists Number.isInteger()

/*
Recap
The map data structure is useful when creating key value pairs and keys are not strings
Sets are useful for creating unique data sets and do not require key value pairs
ES 2015 promise constructor allows promises and resolving an array of promises with Promise.all
Generators are valuable when creating functions or methods that can pause and resume at any time
ES 2015 provides few useful methods for converting array like objects into arrays, making shallow copies of objects and handling issues with NaN and typeof number
*/

// *********************** Exercise ***********************
// ES2015 Methods Exercises
/*
Write a function called copyObject, which accepts one parameter, an object. The function should return a shallow copy of the object.
*/
function copyObject(obj){
   return Object.assign({},obj);
}
/*
Write a function called checkIfFinite which accepts one parameter and returns true if that parameter is a finite number.
*/
function checkIfFinite(checkFinite){
   return Number.isFinite(checkFinite);
}
/*
Write a function called areAllNumbersFinite which accepts an array and returns true if every single value in the array is a finite number, otherwise return false.
*/
function areAllNumbersFinite(arr){
   return arr.every(Number.isFinite);
}
/*
Write a function called convertArrayLikeObject which accepts a single parameter, an array like object. The function should return the array like object converted to an array
*/
function convertArrayLikeObject(arrayLikeObject){
   return Array.from(arrayLikeObject);
}
/*
Write a function called displayEvenArguments which accepts a variable number of arguments and returns a new array with all of the arguments that are even numbers.
*/
function displayEvenArguments(){
   return Array.from(arguments).filter(curVal => curVal%2 ===0);
}

// **************************** ES 2016 and ES2017 ****************************
// Exponentiation Operator **
// ES 2015
var calculatedNumber = Math.pow(2,4); // 16

// ES2016
var calcNum = 2**4; // 16

var nums = [1,2,3,4];
var total = 2;
for(let i=0; i<nums.length;i++){
   total = Math.pow(total,nums[i]);
}

for(let i=0; i<nums.length;i++){
   total** nums[i];
}

// [].includes
var nums = [1,2,3,4,5];
nums.indexOf(3)>-1; // true
nums.indexOf(43)>-1; // false

//ES2016
nums.includes(3); // true
nums.includes(33); // false

/*
padStart and padEnd)
String methods
padStart = Which allows us to pad or place a certain character number of times before the start of the string
The first parameter is the total length of the new string and second parameter is what to pad from the start
This is quite useful when we need to have all the strings of the same length but our input might not always have that
*/

"awesome".padStart(10);     //    awesome
"awesome".padStart(10,"!"); // !!!awesome

// padEnd = Which allows us to pad or place a certain character number of times after the end of the string
"awesome".padEnd(10,"!");  // awesome!!!

/*
Async Foundations
ES2017 Async Functions
A special kind of function that is created using the word async
The purpose of async functions is to simplify writing asynchronous code, specifically promises
When async function is invoked, a promise is returned to us and we will resolve with whatever value is returned from function
*/

async function first(){
   return "we did it";
}

first().then(value => console.log(value));

/*
What makes them really special is the await keyword
Await is a reserved keyword that can only be used inside async functions
await pauses the execution of the async function and is followed by a Promise. The await keyword waits for the promise to resolve and then resumes the async function's execution and returns the resolved value
Think of the await keyword like a pause button(similat to yield with generators)
*/

async function getMovieData1(){
   console.log('Starting');
   var movieData = await $.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb');
   // this line does not run until the promise is resolved
   console.log('done');
   console.log(movieData);
}

getMovieData1(); // logs an object with data about the movie
//// No .then or callback or yield necessary

//Object async
// We can also place async functions as methods inside objects


var movieCollector = {
   data: 'titanic',
   async getMovie(){
       var response  = await $.getJSON(`https://omdbapi.com?t=${this.data}&apikey=thewdb`);
       console.log(response);
   }
}

movieCollector.getMovie();

// Class async
// We can also place async functions as instance methods with ES2015 class syntax

class MovieData{
   constructor(title){
       this.title = title;
   }
   async getMovie(){
       var response  = await $.getJSON(`https://omdbapi.com?t=${this.title}&apikey=thewdb`);
       console.log(response);
   }
}

var m = new MovieData('shrek');
m.getMovie();


// Handling Errors
// If a promise is rejected using await, an error will be thrown so we can easily use a try/catch statement to handle errors

async function getUser(user){
   try{
       var response = await $.getJSON(`https://api.github.com/users/${user}`);
       console.log(response.name);
   }catch(error){
       console.log(`${error.statusText}: ${error.status}`);
   }
}
getUser('sahilm9'); // Sahil Mokkapati
// getUser('fooo!!!!!'); // Not Found: 404

/*
Async functions continued
Thinking about HTTP Requests
Below we are making 2 requests sequentially
SEQUENTIAL but not parallel
*/

async function getMovieData3(){
   var responseOne = await $.getJSON("https://omdbapi.com?t=titanic&apikey=thewdb");
   // The second HTTP request does not get made until the first promise is resolved.
   // This can really slow down applications
   var responseTwo = await $.getJSON("https://omdbapi.com?t=shrek&apikey=thewdb");
   console.log(responseOne);
   console.log(responseTwo);
}

getMovieData3();
// We fix this

async function getMovieData4(){
   //Start the HTTP requests in parallel and await their resolved promises
   var titanicPromise = $.getJSON("https://omdbapi.com?t=titanic&apikey=thewdb");
   var shrekPromise = $.getJSON("https://omdbapi.com?t=shrek&apikey=thewdb");

   var titanicData = await titanicPromise;
   var shrekData = await shrekPromise;

   console.log(responseOne);
   console.log(responseTwo);
}

/*
await with Promise.all
We can use Promise.all to await multiple resolved promises
*/

async function getMovieData5(first,second){
   var movieList = await Promise.all([
       $.getJSON(`https://omdbapi.com?t=${first}&apikey=thewdb`),
       $.getJSON(`https://omdbapi.com?t=${second}&apikey=thewdb`),
   ])
   console.log(movieList[0].Year);
   console.log(movieList[1].Year);
}

getMovieData5('titanic','shrek');
// 2001
// 1998

/*
Write a function called getMostFollowers, which accepts a variable number of arguments. You should then make an AJAX call to the Github User API (https://api.github.com/users/) to get the name and number of followers of each argument. The function should return a promise, which when resolved, returns a string which displays the username who has the most followers.
*/
async function hasMostFollowers(...users){
   let baseURL = 'https://api.github.com/users/';
   let userPromises = users.map(user => $.getJSON(baseURL+ user));
   let results = await Promise.all(userPromises);
   let max = results.sort((a,b)=> a.followers<b.followers)[0];
   return `${max.name} has the most followers with ${max.followers}`;
}
hasMostFollowers('mojombo','torvalds','JakeWharton').then(function(data){
   console.log(data); // Linus Torvalds have the most followers with 73733
})
/*
Write a function called starWarsString, which accepts a number. You should then make an AJAX call to the Star Wars API (https://swapi.co/ ) to search for a specific character by the number passed to the function. Your function should return a promise that when resolved will console.log the name of the character.

Using the data from the previous AJAX call above, make another AJAX request to get the first film that character is featured in and return a promise that when resolved will console.log the name of the character and the film they are featured in

Using the data from Bonus 1 - make another AJAX call to get the information about the first planet that the film contains. Your function should return a promise that when resolved will console.log the name of the character and the film they are featured in and the name of the planet.
*/
async function starWarsString1(id){
   let str = '';
   let results = await $.getJSON(`https://swapi.co/api/people/${id}`);
   str+= results.name;
   let firstFilm = results.films[0];
   let firstMovie = await $.getJSON(firstFilm)
   str += ` is featured in ${firstMovie.title}, directed by ${firstMovie.director}`;
   let firstPlanet = firstMovie.planets[0];
   let firstPlanetInfo = await $.getJSON(firstPlanet);
   return str += ` and it takes place on ${firstPlanetInfo.name}`;
}

starWarsString1(1).then(function(data){
   console.log(data);
})

/*
Object Rest and Spread + Recap
Gather remaining(rest) of keys and values in an object and create a new one out of them
*/
var instructor =  {first:'Sahil', last:'Mokkapati',job:'Student',numSiblings:1};

var {first,last,...data} = instructor;
first; // Sahil
last; // Mokkapati
data; // {job:'Student', numSiblings:1}

//Object Spread
//Spread out keys and values from one object to another
var sahilInformation=  {first:'Sahil', last:'Mokkapati',job:'Student'};

var johnInformation = { ...sahilInformation, first:'John', last:'Doe'};
johnInformation; // {first:'John', last:'Doe', job:'Student'}
// Great for creating objects starting with default values and is a more concise alternative to Object.assign

var defaults = {job:'Student',ownsCat:true, ownsDog: true};
var Richard = { ...defaults, ownsCat:false};
var Mary = {...defaults, ownsDog: false};
Richard; // {job:'Student', ownsCat:false, ownsDog: true}
Mary; // {job:'Student', ownsCat:true, ownsDog: false}

/*
RECAP
ES 2016 provides the ** operator and [].includes
ES 2017 provides helpful string methods and introduces async functions
The async/ await keywords in ES2017 allow for writing synchronous looking functions that under the hood are asynchronous
We can combine async functions with Promise.all to create readable synchronous 'looking' code
The rest and spread operator are proposed changes to JavaScript
*/