// Callback Functions
/*
Callback function: A callback function is a function that is passed into another function as a parameter then invoked by that other function
*/
function callback(){
  console.log('Coming from callback');
}
function higherOrder(fn){
  console.log('About to call callback');
  fn();
  console.log('Callback has been invoked');
}
higherOrder(callback); // Callback is passed as a parameter
/*
A higher order function is a function that accepts a callback as a parameter
*/
/*
Callbacks are used for
- Advanced Array Methods
- Browser Events
- AJAX requests
- React Development
*/
let greet = (name, formatter) => `Hello ${formatter(name)}`;

console.log(greet('Sahil',(name) => name.toUpperCase()));
console.log(greet('Sahil',(name) => `${name}!!!!`));

// The Stack and the Heap
/*
-> A stack is an ordered data structures
-> Keeps track of function invocations
-> Part of JavaScript runtime( We don't access it directly)
-> Whenever you invoke a function, the details of the invocation are saved to the top of the stack(pushed to the top)
-> Whenever a function returns, the information about the invocation is taken off the top of the stack(popped off the top)
Stack Frame:
-> The function that was invoked
-> The parameters that were passed to the function
-> Current line number
*/
let add = (a,b) => a+b;
let result = add(1,2);
console.log(result);

/*
A stack is an ordered set of stack frames most recently invoked function is on the top of the stack. The bottom of the stack is the first function invoked. The stack is processed from top to bottom.
*/


// Heap is an area in memory where our data is stored
/*
The object is created in the heap.
obj is a reference to the object
*/

let obj = {firstName:'Sahil', lastName:'Mokkapati'};
// New data is not created, only a copy of the reference
let referenceObj = obj;

const upperCaseFirst = word => `${word[0].toUpperCase()}${word.slice(1)}`;
const upperCaseWords = sentence => {
  let words = sentence.split(" ");
  return words.map(word => upperCaseFirst(word)).join(" ");
}
console.log(upperCaseWords('i love javascript'));


// setTimeout and setInterval
/*
A function that asynchronously invokes a callback after a delay in milliseconds
*/

let timerId = setTimeout(function(){
  console.log(`This function runs in 30 seconds`);
},3000);

setTimeout(function(){
  console.log(`Canceling the first setTimeout ${timerId}`);
  clearTimeout(timerId);
},2000);

let num =0;
let intervalId = setInterval(function(){
  num++;
  console.log(`num: ${num}`);
  if(num ===5) clearInterval(intervalId);
},1000);

// Write a function called countDown, The function accepts 1 parameter which is a time in seconds for countdown. The function should console.log the time remaining every second. Once the timer gets to 0, the timer should be stopped and you should console.log 'Get, Set, Go!!!';

const countDown = seconds => {
  let intervalId = setInterval(() => {
    seconds--;
      if(seconds>0){
        console.log(seconds)
      }
      else if(seconds === 0){
          console.log(`Get, Set, Go!!!`);
          clearInterval(intervalId);
      }
      else {
        alert('Give a positive timer');
        clearInterval(intervalId);
      }
  },1000);
}
countDown(10);

// Event Loop and the Queue
/*
Queue: An ordered list of functions waiting to be placed on the stack
Functions in the Queue are processed on a frist in, first out basis(FIFO)
Event Loop: A functionality in the JavaScript runtime that checks the queue when the stack is empty
If the stack is empty, the front of the queue is placed in the stack
*/
const square = num => num*num;
setTimeout(function(){
  console.log('Callback is placed on the queue');
},0); // setTimeout places callback function in 0 seconds the Queue
console.log(square(5)); // When this is done, event loop checks if there are any more functions waiting to be executed, if there aren't any, it then checks the queue to see if there any functions waiting to be executed and then places that on the stack
/*
JavaScript is Single Threaded
Single Threaded: Code execution is linear, code that is running cannot be interuppted by something going on in the program
*/

// Promise
/*
A promise is an object that represents a task that will be completed in the future
*/
// Creating a promise
/* We create Promise with Promise constructor, the costructor takes a callback function with 2 parameters, resolve,reject, asynchronous task whether to call resolve or reject function.If asynchronous task is completed successfully asynchronous task will be invoked, if it didn't reject will be invoked */
let p = new Promise(function(resolve,reject){
  let num = Math.random();
  if(num <0.5) resolve(num);
  else reject(num);
});

p.then(function(data){// callback in .then will be invoked resolve is invoked inside of the promise
  console.log(`Success: ${data}`)
}).catch(function(error){// callback in .catch will be invoked with reject is invoked inside of promise
  console.log(`Error: ${error}`);
});

let promise = new Promise(function(resolve,reject){
  setTimeout(function(){
    let randomInt = Math.floor(Math.random()*10);
    if(randomInt<=5) resolve(randomInt);
    else reject(randomInt);
  },3000);
});

promise.then(function(data){// Even though setTimeout doesn't finish yet, we have on object that we can attach a callback onto, advantage of promises. Promise object will immediately be returned
  console.log(`Random int passed to resolve ${data}`);
}).catch(function(error){
  console.log(`Random int passed to reject ${error}`);
});


let promiseA = new Promise(function(resolve,reject){
  setTimeout(function(){
    let randomInt = Math.floor(Math.random()*10);
    resolve(randomInt);
  },500);
});

promiseA.then(function(data){
  console.log(`Random int passed to resolve ${data}`);
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve(Math.floor(Math.random()*10));
    },2000);
  });
}).then(function(data){
  console.log(`Second random int passed to resolve ${data}`);
});
// Promises aren't the only things, that can be returned from callback, a promise callback can also return values, so the values returned from previous .then callback will be passed into next .then callback
let counter = 0;
const incCounter = () => {
  counter++;
  console.log(`Counter: ${counter}`);
}
const runLater = (callback, timeInMs) => {
  let p = new Promise((resolve,reject) => {
    setTimeout(()=> {
        resolve(callback());
    },timeInMs);
  });
  return p;
};
runLater(incCounter,1000).then(()=> {
  return runLater(incCounter,2000)
}).then(()=>{
  runLater(incCounter,3000);
});