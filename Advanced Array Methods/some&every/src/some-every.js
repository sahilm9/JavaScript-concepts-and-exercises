/*
Some
-> Iterates through an array
-> Runs a callback function on each value in the array
-> If the callback function returns true for at least one single value, entire function returns true
-> otherwise, returns false
-> The result of the callback will always be a boolean
*/
/*
Implementing our own version for some function
*/
function some(arr, callback){
  let newArr = [];
  for(let i=0; i<arr.length; i++){
    if(callback(arr[i],i,arr)) return true;
  }
  return false;
}
/* Using some in functions*/
function hasExclamationMark(str){
  return str.split("").some(curVal => curVal === '!');
}
/*
Every
-> Iterates through an array
-> Runs a callback function on each value in the array
-> If the callback function returns false, for at least one single value, entire function returns false
-> otherwise, returns true
-> The result of the callback will always be a boolean
*/
/*
Implementing our own version for every function
*/
function every(arr, callback){
  let newArr = [];
  for(let i=0; i<arr.length; i++){
    if(callback(arr[i],i,arr) === false) return false;
  }
  return true;
}
/* Using every in functions*/
function allLowerCase(str){
  return str.split('').every(curVal => curVal === curVal.toLowerCase());
}
function allArrays(arr){
  return arr.every(Array.isArray);
}
// *********************** Exercise ***********************
/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.
*/
function hasOddNumber(arr){
  return arr.some(curVal => curVal%2 === 1);
}
/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false
*/
function hasAZero(num){
  return num.toString().split("").map(Number).some(curVal => curVal === 0);
}
/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.
*/
function hasOnlyOddNumbers(arr){
  return arr.every(curVal => curVal%2 === 1);
}
/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.
*/
function hasNoDuplicates(arr){
  return arr.every(curVal => arr.indexOf(curVal) === arr.lastIndexOf(curVal));
}
/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.
*/
function hasCertainKey(arr,key){
  return arr.every(curVal => curVal[key]);
}
/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.
*/
function hasCertainValue(arr, key, searchValue){
  return arr.every(curVal => curVal[key] === searchValue);
}