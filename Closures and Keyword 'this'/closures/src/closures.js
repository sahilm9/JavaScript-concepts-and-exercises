/*
Closures
A closure is a function that makes use of variables defined in outer functions that have previously returned
*/
function outer(){
  let start = `Closures are`;
  return () => `${start} awesome`;
}
function anotherOuter(a){
    return b => {
        // the inner function is making use of the variable 'a
        // which was defined in an outer funciton called 'outer
        // and by the time inner is called, the outer function has returned this called "inner" is a closure
        return a+b;
     }
}
/*
->we have to 'return' the inner function for this to work
->we can either call the inner function right away by using an extra() or we can store the result of the function in a letiable
->Closure only exists when an inner function makes use of letiables defined from an outer function that has returned. If the inner function does not make use of any of the external letiables all we have is a nested function.
*/
function outerFn(){
    let data ='something from outerfn';
    let fact='remember me';
    return function innerFn(){
        // if you keep the chrome dev tools open
        // this will pause our code and place us
        // in the sources tab where we can examine our letiables
        debugger;
        // if i try to access data, i'll get a reference error
        // inner functions do not remember everything that outer functions have returned, only the variables that they need
        // When a function(outer) returns, it first checks to see if there any inner functions which use the variables defined in the function(outer), it will make sure to remember those variables if it needs to, this is how closure works
        // only the variables used in the inner function are remembered
        // closures dont remember everything from an outer function - just the variables they need
        return fact;
    }
}
/*
Private Variables,
We can acheive concept of private variable through closures
*/
function counter(){
    let count =0;
    return ()=> {
        count++;
        return count;
    }
}
function classRoom(){
    let students = ['Sahil','Jane'];
    return {
        getStudents: function(){
            return students;
        },
        addStudent: function(student){
        students.push(student);
        return students;
        }
    }
}
let first = classRoom();
first.getStudents(); // ['Sahil', 'Jane']
first.addStudent('John'); // ['Sahil', 'Jane', 'John']
let course2 = classRoom();
course2.addStudent('Antony');// ['Sahil','Jane','Antony']
course2.getStudents().pop(); // Antony
course2.getStudents().pop(); // Jane
course2.getStudents().pop(); // Sahil
course2.getStudents().pop(); // undefined
// Better Implementation, helps in not modifying the instructors letiable
function classRoom2(){
    let students = ['Sahil','Jane'];
    return {
        getStudents: function(){
            return students.slice(); //
            // Now the students array is truly Private
        },
        addStudent: function(student){
        students.push(student);
        return students.slice(); //
        // Now the students array is truly Private
        }
    }
}

let course3 = classRoom2();
course3.getStudents().pop(); // Jane
course3.getStudents().pop(); // Jane
course3.getStudents(); // ['Sahil','Jane'];

// Classic example of closures using Using ES5, IIFE
function buildFunctions(){
  var arr = [];
  for(var i=0; i<3; i++){
    arr.push(function(j){
      return function(){
        return j;
      }
    }(i)); // using Immediately invoked functions;
  }
  return arr;
}

// *********************** Exercise ***********************
/*
Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.
*/
function specialMultiply(...args){
  if(args.length === 2) return args[0]*args[1];
  else if (args.length ===1){
    return (b) => args[0] *b;
  }
}
/*
Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.
*/

function guessingGame(amount){
   let answer = Math.floor(Math.random()*10);
   let guesses = 0;
   let completed = false;
    return function(guess){
        if(!completed){
            guesses++;
            if(guess === answer){
                completed = true;
                return "You got it";
            }
            else if(guesses === amount){
                completed = true;
                return "No more guesses, the answer was " + answer;
            }
            else if(guess < answer) return "Your guess is too low"
            else if(guess>answer) return "Your guess is too high"
        }
        return "You are all done playing";
    }
}
// Summary
/*
->Closure exists when an inner function makes use of variables declared in an outer function which has previously returned
-> Closure does not exist if you do not return an inner function and if that inner function does not make use of variables returned by an outer function
-> JavaScript will only remember values that are being used inside of the inner function, not all variables defined in the outer function
-> We can use closures to create private variables and write better code that isolate our logic and application
*/