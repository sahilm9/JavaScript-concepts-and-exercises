// describe for sumOddNumbers function
describe("#sumOddNumbers", function(){
  it("sum's the odd numbers", function(){
    expect(sumOddNumbers([1,2,3,5,8,9])).toBe(18);
  });
  it("works for negative", function(){
    expect(sumOddNumbers([-1,-2,-3])).toBe(-4);
  });
});
// describe for createFullName function
describe("#createFullName", function(){
  let arr = [
    {firstName:'Sahil', lastName:'Mokkapati'},
    {firstName:'John', lastName:'Doe'}
  ];
  it("returns an array firstName and lastName concatenated", function(){
    expect(createFullName(arr)).toEqual(['Sahil Mokkapati', 'John Doe']);
  });
});
// describe for extractValue function
describe("#extractValue", function(){
  let arr = [
    {firstName:'Sahil', lastName:'Mokkapati'},
    {firstName:'John', lastName:'Doe'},
    {firstName:'Jane', lastName:'Doe'},
  ];
  it("returns an array of values for object key", function(){
    expect(extractValue(arr, 'firstName')).toEqual(['Sahil', 'John', 'Jane']);
  });
});
// describe for vowelCount function
describe("#vowelCount", function(){
  it("returns an object with keys as vowels and values as count", function(){
    expect(vowelCount('JavaScript')).toEqual({a:2, i:1});
    expect(vowelCount('React')).toEqual({e:1, a:1});
    expect(vowelCount('Gulp')).toEqual({u:1});
    expect(vowelCount('Babel')).toEqual({a:1, e:1});
    expect(vowelCount('Webpack')).toEqual({e:1, a:1});
    expect(vowelCount('I LOVE JavaScript')).toEqual({i:2, o:1, e:1, a:2});
  });
});
// describe for addKeyAndValue function
describe("#addKeyAndValue", function(){
  it("returns array passed with key and value added", function(){
    expect(addKeyAndValue([{company: 'Airbnb'}, {company: 'Uber'}, {company: 'Facebook'}, {company: 'Twitter'}], 'library', 'React')).toEqual([{company:'Airbnb', library:'React'}, {company:'Uber', library:'React'}, {company:'Facebook', library:'React'}, {company:'Twitter', library:'React'}]);
  });
});
// describe for partition function
describe("#partition", function(){
  function isOdd(val){
    return val % 2 !== 0;
  }
  function isLongerThanFourCharacters(val){
    return val.length > 4;
  }
  let arr = [1,2,3,4,5,6,7,8];
  let names = ['Sahil','John','Jane'];
  it("returns an array of arrays with the first subarray as values returning true from the callback", function(){
    expect(partition(arr, isOdd)).toEqual([[1,3,5,7],[2,4,6,8]]);
    expect(partition(names, isLongerThanFourCharacters)).toEqual([['Sahil'],['John', 'Jane']]);
  });
});