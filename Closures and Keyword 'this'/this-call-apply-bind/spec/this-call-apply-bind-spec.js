// describe for arrayFrom function
describe("#arrayFrom", function(){
  it("converts an arrayLikeObject into arrayFrom()", function(){
    let divs = document.getElementsByTagName('div');
    expect(arrayFrom(divs)).toEqual(jasmine.any(Object));
  });
});
// describe for sumEvenArguments function
describe("#sumEvenArguments", function(){
  it("takes all of the arguments passed to a function and returns the sum of the even ones", function(){
    expect(sumEvenArguments(1,3,5,8)).toEqual(8); // 6
    expect(sumEvenArguments(1,2,10)).toEqual(12); // 8
    expect(sumEvenArguments(1,3)).toEqual(0);// 2
  });
});
// describe for invokeMax function
describe("#invokeMax", function(){
  function multiply(a,b){
      return a*b;
  }
  it("returns a function that calls another function a certain amount of times", function(){
   let addOnlyFourTimes = invokeMax(multiply,4);
   expect(addOnlyFourTimes(1,9)).toEqual(9);
   expect(addOnlyFourTimes(2,4)).toEqual(8);
   expect(addOnlyFourTimes(1,5)).toEqual(5);
   expect(addOnlyFourTimes(1,1)).toEqual(1);
   expect(addOnlyFourTimes(1,2)).toEqual("Maxed Out!");
  });
});
// describe for once function
describe("#once", function(){
  function add(a,b){
    return a+b;
  }
  let addOnce = once(add);
  it("returns a function", function(){
    expect(addOnce).toEqual(jasmine.any(Function));
  });
  it("only allows for the function passed to it to be invoked once and returns undefined if the function has already been invoked", function(){
    expect(addOnce(2,2)).toEqual(4);
    expect(addOnce(2,2)).toEqual(undefined);
    expect(addOnce(2,2)).toEqual(undefined);
  });
});
// describe for bind function
describe("#bind", function(){
  function addFiveNumbers(a,b,c,d,e){
    return a+b+c+d+e;
  }
  function firstNameFavoriteColor(favoriteColor){
    return `${this.firstName}'s favorite color is ${favoriteColor}`;
  }
  it("returns a function", function(){
    expect(bind()).toEqual(jasmine.any(Function));
  });
  it("is invoked with the value of the keyword this passed to the function", function(){
    let bindFn = bind(firstNameFavoriteColor, sahil);
    expect(bindFn('green')).toEqual("Sahil's favorite color is green");
    let bindFn1 = bind(firstNameFavoriteColor, sahil, 'blue');
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
// describe for flip function
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
    expect(flip()).toEqual(jasmine.any(Function))
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