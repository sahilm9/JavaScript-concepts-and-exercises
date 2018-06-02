/*
Filter
-> Creates a new array
-> Iterates through an array
-> Runs a callback function on each value in the array
-> If the callback function returns true, that value will be placed in the new array
-> If the callback funciton returns false, that value will be ignored
-> The result of the callback will always be a boolean
*/
/*
Implementing our own version for filter function
*/
function filter(arr, callback){
  let newArr = [];
  for(let i=0; i<arr.length; i++){
    if(callback(arr[i],i,arr)){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// Using filter in a function
function moreThanFourLetters(arr,callback){
  return arr.filter(curVal => curVal.length>4);
}
// *********************** Exercise ***********************
/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
*/
function filterByValue(arr, key){
  return arr.filter(curVal => curVal[key] !== undefined);
}
/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.
*/
function find(arr, val){
  return arr.filter(curVal => curVal === val)[0];
}
/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.
*/
function findInObj(arr, key, searchVal){
  return arr.filter(curVal => curVal[key] === searchVal)[0];
}
/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
*/
function removeVowels(str){
  let vowels=['a','e','i','o','u'];
  return str.toLowerCase().split("").filter(character => {
      if(!vowels.includes(character)) return character;
  }).join("");
}
/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled
*/
function doubleOddNumbers(arr){
  return arr.filter(curVal => curVal%2 !==0).map(curVal => curVal*2);
}