// Execution Contexts and Lexical Environments
/*
  - Syntax Parsers: A program that reads your code and determines what it does and if your grammar is valid

  - Lexical Environments: Where something sits physically in the code you write. A lexical environment exists in programming languages in which where you write something is important
*/
function hello(){ // Syntax parse part of compiler, interpreter, it reads character by character, it reads - f-u-n-c-t-i-o-n and expects a space after it and next things it see's it it understands it's the name of the function
  // The variable sits lexically inside the function
  var a = 'hello world';
}
/* Execution Context: A wrapper to help manage the code that is running
 - There are lots of lexical environments. Which one is currently running is managed via execution contexts It can contain things beyond what you'ev written in your code
*/

// Name-Value Pairs and Objects
/*  Name-Value Pair: A name which maps to a unique value
    The name may be defined more than once, but only can have one value in any given context.
    The value may be more name-value Pairs

    Object: A collection of Name-Value pairs
*/
var address = {
    street: 'Main',
    number: 100,
    Apartment: { // Apartment is a name and its value is another collection of name value pairs
      Floor: 3,
      number: 301
    }
}
/*
Whenever a code is run, its run inside a execution context
Base execution context is Global execution context, it creates 2 things for you, it creates
a ) Global Object and
b ) a special variable/keyword called 'this'
At global level Global Obejct = 'this'
In JavaScript when you create variables and functions that and you are not inside of function, those variables and functions get attached to global Object
If code is running inside a browser, then global object is window object
Execution context also has a reference to its outer environment, base execution context doesn't have a reference to outer environment as it a global execution context
Execution context will be running your code
*/


// The Execution Context - Creation and hositing
b(); // called b
console.log(a); //  undefined
var a = 'Hello World';
function b(){
  console.log('called b');
}
/*
Execution Context is created in 2 phases
1st phase - Creation phase
It sets up Global Object,
this,
link to outer environment,
in the creation phase, when parser runs through the code line by line,
it sets up memory space for varibales and functions
'Hoisting',
It's not actually moving the code up, before the code gets executed line by line, the JavaScript engine sets up memory space for both variables and functions defined.
So the functions and variables exist in memory, when the code begins to execute line by line it has access to them, however when it comes to variables, it's little different
The function in its entirity is placed in memory space but when code is executed line by line that is when the assignments are set,
for the above example a = 'Hello World', It initally sets a to undefined, the same place holder if we never assigned the variable like var a;
All variables in JavaScript are initially set to undefined but functions are placed in its entirity and so it is a bad idea to rely on hoisting in anyway.

*/
var c;
console.log(c); // undefined
// console.log(d); // Uncaught ReferenceError: z is not undefined

// 'undefined' a special keyword in JavaScript which means that a variable hasn't been set a value yet

if(c === undefined){
  console.log('c is undefined');
}
else{
  console.log('c is defined')
}
// returns 'c is undefined'

/*
if(d === undefined){
  console.log('d is undefined');
}
else{
  console.log('d is defined')
}
Uncaught ReferenceError: d is not defined, becuase d is never defined
Never set 'var d = undefined', becuase it really helps in debugging code
*/



// The Execution Context - Code execution
/*
2nd phase of execution context - execution phase
In addition to global object, this, reference to outer environment, JavaScript engine runs your code line by line
*/
function e(){
  console.log('called b');
}
e(); // called b
console.log(f); //  undefined
var f= 'Hello World'; // it sets the value of f in execution phase
console.log(f); // Hello World

// JavaScript is Single Threaded, Synchronous execution
/*
Single Threaded - One command at a time
Under the hood of the browser, maybe not
Synchronous - One at  a time and in order
*/

// Function Invocation and Execution Stack
/*
Invocation: Running a funciton, In JS, using parenthsesis()
*/

function h(){
}
function g(){
  h();
}
g();

/*
The global Execution Context is created and code is executed
It sets up memory space in creation phase and executes the code line by line, when it hits 'g()',
-> A new execution context is created and placed on what's called execution stack, which ever one is on top is currently running
Anytime invocation is done, a new execution context is created and placed on top of the stack
-> g's execution contexts creates memory space for variables and functions if exist and then run the code line by line and when it hits 'h()', it stops and creates another execution context.
This is how function invocation happens in JavaScript, everytime a function invocation results in new execution context, when h finishes as it is at the top of the stack, it is popped out of the stack and then a and then down to global
Lexical order doesn't matter as those functions are already in memory, execution contexts are created in the order in which the functions are invoked
*/

// Functions, Context and Variable Environments
/*
Variable Environment: Where variables live in memory and how they relate to each other in memory
*/

function j(){
  var myVar; // stored in j's execution context
}
function i(){
  var myVar =2; // stored in i's execution context
  j(); // a new execution context is created
}
var myVar =1; /* Global Execution context is created and this myVar is put into memory space, it variable environment is the global object  */
i(); // a new execution context is created for i's myVar will be put into that execution context
// Every execution context has its own variable environment

// Scope chain
/*
Where a variable is available in your code and if it's truly the same variable or a new copy
*/

// Asynhcronous Callbacks
/*
More than one at a time
In the browser, along with JavaScript engine, there are other engines such as Rendering Engine, HTTP Request, JavaScript enginer has the hooks to talk to rendering engine to change the view and with HTTP to get data, although they are running asynchronously, what's happening inside JavaScript engine is just synchronous

In addition to execution context's, there's another list inside the browser called Event Queue, this is full of events, notification of events that might be happening. When the browser, somewhere outside the JavaScript engine has an event that inside of Javascript engine that we want to be notified of, it gets placed on the event queue, we can function to listen for that event and write functions to respond to it
That Event Queue is looked at by JavaScript when the execution stack is empty, if there's a click event , it sees the event and it see's there's function to be run for that event and it creates execution context for that function when that event happens.
Browser asynchronously is putting them into the queue what is in the JavaScript engine is running line by line and when execution stack is empty then these event queue is processed
*/

function waitThreeSeconds(){
  var ms =3000 + new Date().getTime();
  while( new Date()< ms){}
    console.log('finished function'); // Logged first
}

function clickHandler(){
  console.log('click event');
}
// listen for the click event
document.addEventListener('click', clickHandler); // clicked while three seconds are running, logged third

waitThreeSeconds();
console.log('finished execution'); // logged secondd