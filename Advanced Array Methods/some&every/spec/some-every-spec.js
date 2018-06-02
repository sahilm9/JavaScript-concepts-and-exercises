// describe for hasExclamationMark function
describe("#hasExclamationMark", function(){
  it("returns true if string has explanation mark", function(){
    expect(hasExclamationMark('I Love JavaScript!!')).toEqual(true);
  });

  it("returns false if string doesn't have exclamation", function(){
    expect(hasExclamationMark('I Love JavaScript')).toEqual(false);
  });
});
// describe for allLowerCase function
describe("#allLowerCase", function(){
  it("returns true if every character is lower case", function(){
    expect(allLowerCase('I Love JavaScript')).toEqual(false);
    expect(allLowerCase('i love javascript')).toEqual(true);
  });
});
// describe for allArrays function
describe("#allArrays", function(){
  it("returns true if every value in the array passed is array", function(){
    expect(allArrays([[1],[2],[3,4]])).toEqual(true);
  });
  it("returns false if every value in the array passed isn't array", function(){
    expect(allArrays([[1],[2],{}])).toEqual(false);
  });
});
// describe for hasOddNumber function
describe("#hasOddNumber", function(){
  it("returns true if array contains at least one odd number", function(){
    expect(hasOddNumber([1,2,3,4,5,6])).toEqual(true);
  });
  it("returns false if array doesn't contain at least one odd number", function(){
    expect(hasOddNumber([2,2,2,4])).toEqual(false);
  });
});
// describe for hasAZero function
describe("#hasAZero", function(){
  it("returns true if number passed contains at least one zero", function(){
    expect(hasAZero(32144444447012358594)).toEqual(true);
  });
  it("returns false if number passed contains doesn't contain least one zero", function(){
    expect(hasAZero(9999999)).toEqual(false);
  });
});
// describe for hasOnlyOddNumbers function
describe("#hasOnlyOddNumbers", function(){
  it("returns true if every number in the array is odd", function(){
    expect(hasOnlyOddNumbers([1,5,9,15])).toEqual(true);
  });
  it("returns false if every number in the array isn't odd", function(){
    expect(hasOnlyOddNumbers([0,1,3])).toEqual(false);
  });
});
// describe for hasNoDuplicates function
describe("#hasNoDuplicates", function(){
  it("returns true if there are no duplicates in the array", function(){
    expect(hasNoDuplicates([0,1,2])).toEqual(true);
  });
  it("returns false if there are duplicates in the array", function(){
    expect(hasNoDuplicates([1,3,5,1])).toEqual(false);
  });
});
// describe for hasCertainKey function
describe("#hasCertainKey", function(){
  let arr = [
      {firstName:'Sahil',lastName:'Mokkapati'},
      {firstName:'John',lastName:'Doe', hasDog: true},
      {firstName:'Jane',lastName:'Doe', hasDog: true}
    ];
  it("returns true if every object contains the key", function(){
    expect(hasCertainKey(arr,'firstName')).toEqual(true);
  });
  it("returns false if every object doesn't have the key", function(){
    expect(hasCertainKey(arr, 'hasDog')).toEqual(false);
  });
});
// describe for hasCertainValue function
describe("#hasCertainValue", function(){
  let arr = [
      {firstName:'Sahil',lastName:'Mokkapati', title: 'Student'},
      {firstName:'John',lastName:'Doe', hasDog: true, title:'Student'},
      {firstName:'Jane',lastName:'Doe', hasDog: true, title:'Student'}
    ];
  it("returns true if every object contains the key with the value passed", function(){
    expect(hasCertainValue(arr, 'title','Student')).toEqual(true);
  });
  it("returns false if every object doesn't have the key with value passed", function(){
      expect(hasCertainValue(arr,'firstName', 'Sahil')).toEqual(false);
  });
});