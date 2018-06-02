// describe for halfValues function
describe("#halfValues", function(){
  it("divides values by 2", function(){
    expect(halfValues([1.5,4.1,3.7])).toEqual([0.75,2.05,1.85]);
  });
  it("works for negative", function(){
    expect(halfValues([-1.1,-5.2,-3.3])).toEqual([-0.55,-2.6,-1.65]);
  });
});
// describe for tripleValues function
describe("#tripleValues", function(){
  it("triples values in the array", function(){
    expect(tripleValues([4.1,2.3,8.7])).toEqual([12.30,6.90,26.10]);
  });
  it("works for negative numbers", function(){
    expect(tripleValues([-4.1,-2.3,-8.7])).toEqual([-12.30,-6.90,-26.10]);
  });
});
// describe for perfectSquare function
describe("#perfectSquare", function(){
  it("perfect square numbers", function(){
    expect(perfectSquare([1,2,5,49,121,196])).toEqual([1,49,121,196]);
  });
  it("perfect square isn't available for negative numbers", function(){
    expect(perfectSquare([-1,-2,-5,-49,-121,-196])).toEqual([]);
  });
});
// describe for showFirstAndLast function
describe("#showFirstAndLast", function(){
  it("returns an array of only first and last characters", function(){
    expect(showFirstAndLast(['HTML','CSS','JavaScript','React','Gulp','Yarn','Webpack'])).toEqual(['HL','CS','Jt','Rt','Gp','Yn','Wk']);
  });
});
// describe for addKeyAndValue function
describe("#addKeyAndValue", function(){
  it("returns array passed with key and value added", function(){
    expect(addKeyAndValue([{company: 'Airbnb'}, {company: 'Uber'}, {company: 'Facebook'}, {company: 'Twitter'}], 'library', 'React')).toEqual([{company:'Airbnb', library:'React'}, {company:'Uber', library:'React'}, {company:'Facebook', library:'React'}, {company:'Twitter', library:'React'}]);
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