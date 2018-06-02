/*
Understanding Prototype
Inheritance - One object gets access to properties and methods of another object
All ojects have prototype property, a property is simply a reference to another object, we call it proto, its an object that stands on it's own, we could use it, if we want to
*/
var person = {
  firstName: 'Default',
  lastName:'Default',
  getFullName: function(){
    return `${this.firstName} ${this.lastName}`;
  }
}
var sahil = {
  firstName: 'Sahil',
  lastName: 'Mokkapati'
}
/*
Modern browsers do provide a way to directly access prototype, but never ever it, because it decreases the performance, it can slow down applications
DON'T DO THIS EVER, FOR DEMO PURPOSES ONLY
sahil.__proto__ = person; // sahil now inherits person, if we were to call property or method that doesn't exist on john, it will go to person to find it. If person doesn't have it, it will go to proto of person to find it.
sahil.getFullName(); // Sahil Mokkapati
When getFullName is invoked it knows which object originate the call and so it points 'this' to that object

var john = {
  firstName: 'John'
}
john.__proto__ = person;
john.getFullName(); // John default   , it first searches john for properties, finds firstName and as it doesn't find lastName it searches the prototype which is person and it finds lastName there and returns John Default
*/

// Everything is an Object or a primitive, all have a prototype except for one thing, the base object in JavaScript
var a = {};
var b = function(){};
var c =[];

/*
a.__proto__ // Object {} , base Object in JavaScript, very bottom of prototype chain always, that object has properties and methods on it
b.__proto__ // function Empty(){}, empty function object, prototype of all functions, any functions we create in JavaScript will automatically have this proto . We have familiar properties and methods on it, example, apply, bind, call etc
c.__proto__ // [], empty array , some of the methods, indexOf, length, push etc
c.__proto__.__proto__  // Object {}, base Object
b.__proto__.proto__ // Object {}, base Object
*/


/*
OOP  - A programming model based around the idea of objects
These objects are constrcuted from what are called 'classes' which we can think like a bluprint. We call these objects created from classes 'instaces'
We strive to make our classes abstract and modular
But JavaScript does not have 'classes' built into it,so we use functions and objects
Suppose an architect is tasked with building few houses, each hosue if going to have certain number of bedrooms, bathrooms and sqft, writing individual objects for each house is not an ideal solution, let's have a blueprint like below.
Constructor functions - blueprint
Capitalization of function name  - this is convention
*/
function House(bedrooms, bathrooms, numsqft){
   this.bedrooms = bedrooms;
   this.bathrooms = bathrooms;
   this.numSqft = numsqft;
}
/*
We are attaching properties onto the keyword 'this'. We would like the keyword 'this' to refer to the object we will create from our constructor function
var firstHouse =  House(2,2,1000) // does this work?
firstHouse// undefined
We are not returning anything from the function so our House function returns undefined
We are not explicitly binding the keyword 'this' or placing it inside a declared object. This means the value of the keyword 'this' will be global object, which is not what we want
*/

//The 'new' keyword
var firstHouse = new House(2,2,1000);
// firstHouse is now an object, it has the following properties
firstHouse.bedrooms; // 2
firstHouse.bathrooms; // 2
firstHouse.numSqft; // 1000
// new keyword must be used with function, else we will get typeerror
/*
NEW KEYWORD
1) It creates an empty object
2) It then sets the keyword 'this' (in function that is to be used with) to be that empty object
3) It adds the line 'return this'(implicit) to the end of the function so that object created 'new' keyword can be returned from the function
4) It adds a proerty onto the empty object called "__proto__"(dunder proto), which links the the prototype proerty on the constructor function to the empty object
*/

function Dog(name,age){
   this.name = name;
   this.age = age;
}

Dog.prototype.bark = function(){
   return `${this.name} just barked`;
}

var germanShepherd = new Dog('German Shepherd', '5');
var labrador = new Dog('Labrador', '7');
germanShepherd.bark(); // German Shepherd just barked
labrador.bark(); // Labrador just barked


function Car(make, model, year){
   this.make = make;
   this.model = model;
   this.year = year;
   // We can also set properties on the keyword this that are preset values
   this.wheels  =4;
}

function Motorcycle(make,model,year){
  //using call
  // this refers to object created from MotorCycle function
   Car.call(this,make,model,year);
   this.numWheels =2;
}

function MotorCycle(make,model,year){
   //using apply
   Car.apply(this,[make,model,year]);
   this.numWheels =2;
}

function Motorcycle(){// we don't even need to pass in paramters
   //using apply and arguments, this is better
   Car.apply(this,arguments); // It is not technically an array, its an array like object, apply is used to spread out arguments, we are spreading out 'arguments array like data'
   this.numWheels =2;
}

/*
Recap
-> Object Oriented Programming is a model based on objects constructed from a blue print. We use OOP to write more modular and shareable code
-> In languages that have built in support for OOP, we call these blueprints 'classes' and the objects created from them 'instances'
-> Since, we don not have built-in class support in JavaScript, we mimic classes by using functions. These constructor functions create objects through the use of the new keyword
-> We can avoid duplication in multiple constructor functions by using call or apply
*/

// *********************** Exercise ***********************

/*
 Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber. Your function MUST be named Person. Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the object created from the Person functions' favorite numbe
*/
function Person(firstname,lastname,favoritecolor,favoritenumber){
   this.firstName = firstname;
   this.lastName = lastname;
   this.favoriteColor = favoritecolor;
   this.favoriteNumber = favoritenumber;
   // This is not prefered way to put methods, we will see the best way below
   this.multiplyFavoriteNumber = function(num){
      return num* this.favoriteNumber;
   }
}
/*
From the code above, refactor the Child function to remove all the duplication from the Parent function.
*/
function Child(){
   Person.apply(this,arguments);
}

/*
Introduction to Prototypes
Every constructor function has a property on it called 'prototype' which is an object
The prototype object has a property on it called 'constrcutor' which points back to the constructor function
Any time an object is created using the 'new' keyword, a property called '__proto__' gets created, linking the object and the prototype property of the constructor function
*/

function SecondPerson(name){
   this.name = name;
}
/*
Since we created a function, we already a property called .prototype, in JavaScript, every function has property called .prototype
*/
SecondPerson.prototype; // Object
var sahil = new SecondPerson('Sahil');
var john =  new SecondPerson('John');
// Since we used new keyword, we have established a link between the object and the prototype property, we can access using __proto__

SecondPerson.prototype === sahil.__proto__; // true
sahil.__proto__; // Object

// The Person.prototype object also has a property called constructor which points back to the function

SecondPerson.prototype.constructor === SecondPerson// true

// The prototype property is an object which can have properties and methods placed on it. These properties and methods are shared and accessible by any object created from constructor function using the 'new' keyword. Below we are adding a method on prototype called sayHi, this is accessible by objects created from constructor function using the keyword 'new'
SecondPerson.prototype.sayHi = function(){
   return `Hi ${this.name}`;
}
/*
As method is placed on SecondPerson prototype object, sahil and john which are objects created from SecondPerson using keyword 'new' get access to the method.
*/
sahil.sayHi();// Hi Sahil
john.sayHi(); // Hi John

/*
var arr = []; // Shorthand for writing new Array
var arr = new Array; // used built in constructor in JavaScript called Array and made new object from it
arr.push // where is this push coming from? answer is through dunder prototype
console.dir(arr) // examine .__proto__
arr.__proto__ === Array.prototype // true
*/

// If we put methods inside constructor function, we have to redefine sayHi function, if we were to create many objects, it's inefficient, so we put in Prototype, so that any objects created from constructor function using 'new' keyword can access it.

/*
Create a constructor function for a Vehicle, every object created from this constructor should have a make, model, year property. Each object should also have a property called isRunning, which should be set to false

Every object created from the Vehicle constructor should have a function called turnOn, which changes the isRunning property to true

Every object created from the Vehicle constructor should have a function called turnOff, which changes the isRunning property to false

Every object created from the Vehicle constructor should have a function called honk, which returns the string 'beep' only if isRunning property is true

*/
function Vehicle(make,model,year){
   this.make = make;
   this.model = model;
   this.year = year;
   this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
   this.isRunning = true;
}

Vehicle.prototype.turnOff = function(){
   this.isRunning = false;
}

Vehicle.prototype.honk = function(){
   if(this.isRunning){
       return 'beep';
   }
}

var v1 = new Vehicle('a','b','c');
v1.turnOn(); // changes isRunning to true
v1.honk(); // beep

// *********************** Exercise ***********************
/*
 Create a constructor function for a ThirdPerson. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)
*/
function ThirdPerson(firstName,lastName,favoriteColor,favoriteNumber){
   this.firstName = firstName;
   this.lastName = lastName;
   this.favoriteColor = favoriteColor;
   this.favoriteNumber = favoriteNumber;
   this.family = [];
}
/*
Add a function on the ThirdPerson.prototype called fullName that returns the firstName and lastName property of an object created by the ThirdPerson constructor concatenated together.
*/
ThirdPerson.prototype.fullName = function(){
   return `${this.firstName} ${this.lastName}`;
}
/*
Add a property on the object created from the ThirdPerson function called family which is an empty array.This will involve you going back and adding an additional line of code to your ThirdPerson constructor you previously created in exercise 1.
*/

/*
Add a function on the ThirdPerson.prototype called addToFamily which adds an object constructed from the ThirdPerson constructor to the family array. Make sure that your family array does not include duplicates! This method should return the length of the family array.
*/
ThirdPerson.prototype.addToFamily = function(person){
   if(this.family.includes(person) === false && person instanceof ThirdPerson){
       this.family.push(person);
   }
   return this.family.length;
}
/*
Implement your own version of Array.prototype.map. The function should accept a callback and return a new array with the result of the callback for each value in the array
*/

Array.prototype.map = function(callback){
   var newArr = [];
   for(var i=0; i< this.length; i++){
       newArr.push(callback(this[i],i,this))
   }
   return newArr;
}
/*
Implement a function called reverse that reverses a string and place it on the String.prototype
*/
String.prototype.reverse = function(){
   var newStr = '';
   for( var i = this.length-1; i>=0 ; i--){
       newStr += this[i];
   }
   return newStr;
}

//Prototypes Inheritance
/*
While doing inheritance in JavaScript, we don't actually pass one constructor to another, we pass prototype property of one constructor to another
*/
function Instructor(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

Instructor.sayHello = function(){
  return `Hello ${this.firstName} ${this.lastName}`;
}

function Student(){
  Instructor.apply(this, arguments);
}

var s1 = new Student('Sahil', 'Mokkapati');
/*
Is there anyway, we can object created from Student to use sayHello ? While we can do Student.prototype = Instructor.prototype, it sets objects by reference, meaning, Student Prototype will point to Instructor Prototype, where if we modify properties or methods on Student.prototype, changes will be reflected in Insturctor.prototype as well, which is not what we want. We still want all of the methods and properties from Parent.prototype, but we want two separate objects, not a reference, solution to the problem is
Object.create -  Creates a brand new object and accepts as its first paramter, what the prototype object should be for the newly create object.
*/
Student.prototype = Object.create(Instructor.prototype);
/*
Student.prototype is being assigned to a new Object with dunder proto of Instructor.prototype. Adding methods on to Student.prototype doesn't affect Instructor.prototype.

Why not new?
Student.prototype = new Person;
This will do almost the same thing, but add additional unnecessary properties on the prototype object( since it is ceating an object with undefined properties just for the prototype).
Remember that every prototype has a property on it called constructor which points back to the constructor function
*/
Student.prototype.constructor;/* Instructor, because we over wrote constructor property when using Object.create, so we need to make sure to set it back to the correct value. We call this resetting of constrcutor and it is final part of prototypal inheritance
*/
Student.prototype.constructor = Student;
Student.prototype.constructor; // Student


// *********************** Exercise ***********************

/*
Create a constructor function for a Vehicle. Each vehicle should have a make, model and year property.
*/
function Vehicle(make,model,year){
   this.make = make;
   this.model = model;
   this.year = year;
}
/*
Add a function to the Vehicle prototype called start which returns the string "VROOM!"
*/
Vehicle.prototype.start = function(){
   return 'VROOM!';
}
/*
 Add a function to the Vehicle prototype called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property
*/
Vehicle.prototype.toString = function(){
   return `The make, model, and year are ${this.make} ${this.model} ${this.year}`;
}
/*
Create a constructor function for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype
*/
function Car(){
   Vehicle.apply(this,arguments);
   this.numWheels = 4;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

/*
Create a constructor function for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype
*/

function Motorcycle(){
   Vehicle.apply(this,arguments);
   this.numWheels =2;
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;
/*
Object Oriented Programming recap
-> Every time the new keyword is used, a link between the object created and the prototype property of the constructor is established - this link can be accessed using __proto__
-> The prototype object contains a property called constructor which points back to the constructor function
-> To share properties and methods for objects created by a constructor function, place them in the prototype as it is the most efficient
-> To pass methods and properties from one prototype obect to another, we can use inheritance which involves setting the prototype proerty to be a newly created object using Object.create and reseting the constructor property
*/