// describe for tripleValues function
describe("#tripleValues", function(){
  it("returns values in the array tripled", function(){
    expect(tripleValues([4.1,2.3,8.7])).toEqual([12.30,6.90,26.10]);
  });
  it("works for negative numbers", function(){
    expect(tripleValues([-4.1,-2.3,-8.7])).toEqual([-12.30,-6.90,-26.10]);
  });
});
// describe for valTimesIndex function
describe("#valTimesIndex", function(){
  it("returns an array of each value multiplied with its index", function(){
    expect(valTimesIndex([1,2,3])).toEqual([0,2,6]);
  });
  it("works with negative numbers also", function(){
    expect(valTimesIndex([1,-2,-3])).toEqual([0,-2,-6]);
  });
});
// describe for extractKey function
describe("#extractKey", function(){
  it("returns an array of values at the key", function(){
    expect(extractKey([{company: 'Airbnb'}, {company: 'Uber'}, {company: 'Facebook'}, {company: 'Twitter'}], 'company')).toEqual(['Airbnb','Uber','Facebook','Twitter']);
  });
});
// describe for extractFullName function
describe("#extractFullName", function(){
  let arr = [
    {firstName:'Sahil', lastName:'Mokkapati'},
    {firstName:'John', lastName:'Doe'}
  ];
  it("returns an array firstName and lastName concatenated", function(){
    expect(extractFullName(arr)).toEqual(['Sahil Mokkapati', 'John Doe']);
  });
});