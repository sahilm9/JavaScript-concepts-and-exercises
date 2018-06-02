/*
Map
-> Creates a new Array
-> Iterates through an array
-> Runs a callback function on each value in the array
-> It takes the value returned from callback function and places it in the new array
-> Returns the new array
-> map always returns a new array of same length as it is invoked in
*/
/*
Implementing our own version for map function
*/
function map(arr,callback){
  let newArr = []
    for(let i=0;i<arr.length;i++){
    newArr.push(callback(arr[i],i,arr));
    return newArr;
  }
}
// *********************** Exercise ***********************
/*
Write a function called tripleValues which accepts an array and returns a new array with all the values in the array passed to the function tripled
*/
function tripleValues(arr){
  return arr.map(curVal => Number((curVal*3).toFixed(2)));
}
/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
*/
function valTimesIndex(arr){
  return arr.map((curVal,curInd) => curVal*curInd);
}
/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
*/
function extractKey(arr,key){
  return arr.map(curVal => curVal[key]);
}
/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space.
*/
function extractFullName(arr){
  return arr.map(curVal => `${curVal.firstName} ${curVal.lastName}`);
}