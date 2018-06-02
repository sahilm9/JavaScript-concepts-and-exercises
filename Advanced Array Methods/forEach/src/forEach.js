/*
ForEach
-> Iterates through an array
-> Runs a callback function on each value in the array
-> Returns undefined
*/
/*
Implementing our own version for forEach function
*/
function forEach(arr,callback){
    for(let i=0;i<arr.length;i++){
    callback(arr[i],i,arr);
  }
}
// Using forEach in a function
function halfValues(arr){
  let newArr = [];
  arr.forEach(curVal => newArr.push(Number((curVal/2).toFixed(2))));
  return newArr;
}
// *********************** Exercise ***********************
/*
Write a function called tripleValues which accepts an array and returns a new array with all the values in the array passed to the function tripled
*/
function tripleValues(arr){
  let newArr = [];
  arr.forEach(curVal => newArr.push(Number((curVal*3).toFixed(2))));
  return newArr;
}
/*
Write a function called perfectSquare which accepts an array and returns a new array with only the values which are perfect squares
*/
function perfectSquare(arr){
  let newArr = [];
  arr.forEach(curVal => {
    if(curVal>0 && Math.sqrt(curVal)%1 === 0) newArr.push(curVal);
  });
  return newArr;
}
/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*/
function showFirstAndLast(arr){
  let newArr = [];
  arr.forEach(curVal => newArr.push(`${curVal.charAt(0)}${curVal.charAt(curVal.length-1)}`));
  return newArr;
}
/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object
*/
function addKeyAndValue(arr,key,value){
  arr.forEach(curVal => curVal[key] = value);
  return arr;
}
/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
*/
function vowelCount(str){
  let vowels=['a','e','i','o','u'];
  let vowelCountObj = {};
  str.toLowerCase().split("").forEach(character => {
    if(vowels.includes(character)){
      character in vowelCountObj ? vowelCountObj[character]++ : vowelCountObj[character]=1;
    };
  });
  return vowelCountObj;
};