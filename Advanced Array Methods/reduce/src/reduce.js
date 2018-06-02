/*
Reduce
-> Idea is we can take an array and turn it into another data structure that could be a string, object, array's of array and much more
-> It accepts a callback function and a optional second parameter
-> Iterates through an array
-> Runs a callback function on each value in the array
-> The first parameter to the callback is either the first value in the array or the optional second parameter
-> The first parameter to the callback is commonly called 'accumulator'
-> The returned value from callback becomes the new value of the accumulator
*/
// Using reduce in a function
function sumOddNumbers(arr){
  return arr.reduce((acc,nextVal)=> {
    if(nextVal%2 !==0){
      acc += nextVal;
    }
    return acc;
  },0);
}

function createFullName(arr){
  return arr.reduce((acc,nextVal) => {
    acc.push(`${nextVal.firstName} ${nextVal.lastName}`);
    return acc;
  },[]);
}
// *********************** Exercise ***********************
/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.
*/
function extractValue(arr,key){
  return arr.reduce((acc,nextVal) => {
    acc.push(nextVal[key]);
    return acc;
  },[]);
}
/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
*/
function vowelCount(str){
  let vowels= ['a','e','i','o','u'];
  return str.toLowerCase().split("").reduce((acc,nextVal)=>{
    if(vowels.includes(nextVal)){
      nextVal in acc ? acc[nextVal]++ : acc[nextVal]=1;
    }
    return acc;
  },{});
}
/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.
*/
function addKeyAndValue(arr,key, value){
  return arr.reduce((acc,nextVal) => {
    nextVal[key] = value;
    return acc;
  }, arr);

}
/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray.
*/
function partition(arr, callback){
  return arr.reduce((acc,nextVal)=>{
    callback(nextVal) ? acc[0].push(nextVal) : acc[1].push(nextVal);
    return acc;
  },[[],[]]);
}