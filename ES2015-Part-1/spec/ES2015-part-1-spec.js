// Arrow functions
// describe for tripleAndFilter function
describe("#tripleAndFilter", function(){
  it("triples an array of numbers and returns an array of all those numbers divisible by 5", function(){
    expect(tripleAndFilter([2,3,5])).toEqual([15]);
  });
});
// describe for doubleOddNumbers function
describe("#doubleOddNumbers", function(){
  it("returns a new array of all odd numbers doubled", function(){
    expect(doubleOddNumbers([1,3,4,6])).toEqual([2,6]);
  });
});
// describe for mapFilterAndReduce function
describe("#mapFilterAndReduce", function(){
  it("maps over an array and filters for a length less than 5 and reduces into an object with the key as the name and value as the length", function(){
    var arr = mapFilterAndReduce([{firstName: 'Sahil'}, {firstName: 'Jane'}, {firstName: 'John'}]);
    expect(arr).toEqual({Jane: 4, John: 4});
  });
});
// describe for createStudent function
describe("#createStudent", function(){
  it("returns an object with the keys and values of firstName and lastName", function(){
    expect(createStudentObj('Sahil', 'Mokkapati')).toEqual({firstName: 'Sahil', lastName: 'Mokkapati'});
  });
});
// Rest and Spread
// describe for smallestValue function
describe("#smallestValue", function(){
  it("returns the smallest value for a variable number of arguments", function(){
    expect(smallestValue(5,1,19,-1)).toEqual(-1);
    expect(smallestValue(4,-4,-1,1)).toEqual(-4);
    expect(smallestValue(0,1)).toEqual(0);
    expect(smallestValue(45,12,2.2)).toEqual(2.2);
  });
});
// describe for placeInMiddle function
describe("#placeInMiddle", function(){
  it("places a list of values in the middle of an array", function(){
    expect(placeInMiddle([1,3,5,7],[2,4,6])).toEqual([1,3,2,4,6,5,7]);
    expect(placeInMiddle([3],[0,1,2])).toEqual([0,1,2,3]);
    expect(placeInMiddle([5,7],[1,2.2,3.3,4.4])).toEqual([5,1,2.2,3.3,4.4,7]);
    expect(placeInMiddle([],[2.2,3.3,4.4,5.5])).toEqual([2.2,3.3,4.4,5.5]);
  });
});
// describe for joinArrays function
describe("#joinArrays", function(){
  it("returns a single array of all the parameters concatenated together", function(){
    expect(joinArrays([-4],[-2],[3])).toEqual([-4,-2,3]);
    expect(joinArrays([-1],[-2],[1],[2],[-1],[-2])).toEqual([-1,-2,1,2,-1,-2]);
    expect(joinArrays([-1,-2,-3],[4,5,6],[-7,-8,-9])).toEqual([-1,-2,-3,4,5,6,-7,-8,-9]);
    expect(joinArrays([-1],[3],[0],[-7])).toEqual([-1,3,0,-7]);
  });
});
// describe for sumEvenArgs
describe("#sumEvenArgs", function(){
  it("returns the sum of even arguments passed to the function", function(){
    expect(sumEvenArgs(1,-2,3,4,5)).toEqual(2);
    expect(sumEvenArgs(-1,-2,3,-4,5,6)).toEqual(0);
    expect(sumEvenArgs(-1,-3,-5,-7,-9)).toEqual(0);
  });
});
// describe for flip
describe("#flip", function(){
  function subtractFiveNumbers(a,b,c,d,e){
    return a-b-c-d-e;
  }
  function personSubtract(a,b,c,d){
    return this.firstName + " subtracts " + (a-b-c-d);
  }
  let person = {
    firstName: 'Sahil'
  }
  it("returns a function", function(){
    expect(flip()).toEqual(jasmine.any(Function));
  });
  it("is invoked with the value of the keyword this passed to the function", function(){
    var flipFn = flip(personSubtract, person);
    expect(flipFn(3,2,1,4)).toEqual("Sahil subtracts -2");
    var flipFn = flip(personSubtract, person, 9,2);
    expect(flipFn(4,7)).toEqual("Sahil subtracts -8");
  });
  it("is invoked with the remaining arguments from the outer function and inner function", function(){
    expect(flip(subtractFiveNumbers,this,1)(2,3,4,5)).toEqual(-5);
    expect(flip(subtractFiveNumbers,this,1,2)(3,4,5)).toEqual(-5);
    expect(flip(subtractFiveNumbers,this,1,2,3)(4,5)).toEqual(-5);
    expect(flip(subtractFiveNumbers,this,1,2,3,4,5)()).toEqual(-5);
    expect(flip(subtractFiveNumbers,this)(1,2,3,4,5)).toEqual(-5);
    expect(flip(subtractFiveNumbers,this,1,2,3)(4,5,6,7)).toEqual(-5);
    expect(flip(subtractFiveNumbers,this)(1,2,3,4,5,6,7,8,9,10)).toEqual(-5);
    expect(flip(subtractFiveNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10)).toEqual(-35);
  });
});
// describe for bind function
describe("#bind", function(){
  function addFiveNumbers(a,b,c,d,e){
    return a+b+c+d+e;
  }
  function firstNameFavoriteColor(favoriteColor){
    return this.firstName + "'s favorite color is " + favoriteColor;
  }
  var person = {
    firstName: 'Sahil'
  }
  it("returns a function", function(){
    expect(bind()).toEqual(jasmine.any(Function));
  });
  it("is invoked with the value of the keyword this passed to the function", function(){
    var bindFn = bind(firstNameFavoriteColor, person);
    expect(bindFn('green')).toEqual("Sahil's favorite color is green");
    var bindFn1 = bind(firstNameFavoriteColor, person, 'blue');
    expect(bindFn1('green')).toEqual("Sahil's favorite color is blue");
  });
  it("is invoked with the remaining arguments from the outer function and inner function", function(){
    expect(bind(addFiveNumbers,this,1)(2,3,4,5)).toEqual(15);
    expect(bind(addFiveNumbers,this,1,2)(3,4,5)).toEqual(15);
    expect(bind(addFiveNumbers,this,1,2,3)(4,5)).toEqual(15);
    expect(bind(addFiveNumbers,this,1,2,3,4,5)()).toEqual(15);
    expect(bind(addFiveNumbers,this)(1,2,3,4,5)).toEqual(15);
    expect(bind(addFiveNumbers,this)(1,2,3,4,5,6,7,8,9,10)).toEqual(15);
  });
});
// describe for displayStudentInfo function
describe("#displayStudentInfo", function(){
  it("returns a string with the first value and last value of an object", function(){
    var obj = {first: 'Sahil', last:'Mokkapati'};
    expect(displayStudentInfo(obj)).toEqual('Your full name is Sahil Mokkapati');
  });
});
// describe for printFullName function
describe("#printFullName", function(){
  it("returns a string with the first value and last value of an object with a destructured parameter", function(){
    var obj = {first: 'Sahil', last:'Mokkapati'};
    expect(printFullName(obj)).toEqual('Your full name is Sahil Mokkapati');
  });
});
// describe for createStudent function
describe("#createStudent", function(){
  it("returns a string with the first value and last value of an object with a destructured parameter", function(){
    expect(createStudent()).toEqual('The student likes JavaScript and ES2015');
    expect(createStudent({likesES2015:false})).toEqual('The student likes JavaScript!');
    expect(createStudent({likesJavaScript:false})).toEqual('The student likes ES2015!');
    expect(createStudent({likesJavaScript:false,likesES2015:false})).toEqual('The student does not like much...');
  });
});
// describe for reverseArray function
describe("#reverseArray", function(){
  it("reverses values in an array", function(){
    var arr = [-1,-2,-3,-4,-5];
    var arr2 = [function(){},{},'Hi',2];
    var arr3 = [];
    var arr4 = [1,2,3,4,5,6,7,8,9,10];
    expect(reverseArray(arr)).toEqual([-5,-4,-3,-2,-1]);
    expect(reverseArray(arr2)).toEqual([2,'Hi',jasmine.any(Object),jasmine.any(Function)]);
    expect(reverseArray(arr3)).toEqual([]);
    expect(reverseArray(arr4)).toEqual([10,9,8,7,6,5,4,3,2,1]);
  });
});