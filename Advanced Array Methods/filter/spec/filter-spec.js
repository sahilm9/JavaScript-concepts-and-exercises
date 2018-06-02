// describe for moreThanFourLetters function
describe("#moreThanFourLetters", function(){
  it("returns a new array with value whose length is greater than 3", function(){
    expect(moreThanFourLetters(['Sahil','John','Jane'])).toEqual(['Sahil']);
  });
});
// describe for filterByValue function
describe("#filterByValue", function(){
  let arr = [
    {firstName:'Sahil',lastName:'Mokkapati'},
    {firstName:'John',lastName:'Doe', hasDog: true},
    {firstName:'Jane',lastName:'Doe', hasDog: true}
  ];
  it("returns a new array of objects that contain the key", function(){
    expect(filterByValue(arr, 'hasDog')).toEqual([{firstName:'John',lastName:'Doe', hasDog: true},{firstName:'Jane',lastName:'Doe', hasDog: true}]);
  });
});
// describe for find function
describe("#find", function(){
  it("returns the first value found in the array", function(){
    expect(find([1,2,3,4,5],5)).toEqual(5);
  });
  it("returns undefined if value is not found", function(){
    expect(find([1,2,3,4],10)).toEqual(undefined);
  });
});
// describe for findInObj function
describe("#findInObj", function(){
  let arr = [
    {firstName:'Sahil',lastName:'Mokkapati'},
    {firstName:'John',lastName:'Doe', hasDog: true},
    {firstName:'Jane',lastName:'Doe', hasDog: true}
  ];
  it("returns first found value in the array", function(){
    expect(findInObj(arr, 'hasDog', true)).toEqual({firstName:'John',lastName:'Doe', hasDog: true});
  });
});
// describe for removeVowels function
describe("#removeVowels", function(){
  it("returns a string without vowels", function(){
    expect(removeVowels('JavaScript')).toEqual('jvscrpt');
    expect(removeVowels('React')).toEqual('rct');
    expect(removeVowels('Babel')).toEqual('bbl');
  });
});
// describe for doubleOddNumbers function 
describe("#doubleOddNumbers", function(){
  it("returns a string without vowels", function(){
    expect(doubleOddNumbers([1,2,3,4,5])).toEqual([2,6,10]);
    expect(doubleOddNumbers([4,2,0])).toEqual([]);
  });
});
