// describe for closure examples
describe('closures intro', function(){
  it('closures outer example', function(){
    expect(outer()()).toEqual('Closures are awesome');
  });
  it('closures another outer example', function(){
    let storeOuter = anotherOuter(5);
    expect(anotherOuter(5)(5)).toEqual(10);
    expect(storeOuter(10)).toEqual(15);
  });
  it('closures using debugger example', function(){
    expect(outerFn()()).toEqual('remember me');
  });
  it('closure private variable example', function(){
    let counter1 = counter();
    expect(counter1).toEqual(jasmine.any(Function));
    expect(counter1()).toEqual(1);
    expect(counter1()).toEqual(2);

    let counter2 = counter();
    expect(counter1).toEqual(jasmine.any(Function));
    expect(counter2()).toEqual(1);
    expect(counter2()).toEqual(2);
  });
});
// describe buildFunctions function
describe("#buildFunctions, using ES5", function(){
  var fs = buildFunctions();
  it("returning an array of functions", function(){
    expect(fs).toEqual(jasmine.any(Object));
  });
  it("checking to see if functions in array", function(){
    expect(fs[0]).toEqual(jasmine.any(Function));
    expect(fs[1]).toEqual(jasmine.any(Function));
    expect(fs[2]).toEqual(jasmine.any(Function));
  });
  it("classic example of closure using ES5(IIFE)", function(){
    expect(fs[0]()).toBe(0);
    expect(fs[1]()).toBe(1);
    expect(fs[2]()).toBe(2);
  });
});
// describe for specialMultiply function
describe("#specialMultiply", function(){
  it("returns a function if only one parameter is passed", function(){
    expect(specialMultiply(3)).toEqual(jasmine.any(Function));
  });
  it("returns a function if only one parameter is passed that can be invoked with a second parameter", function(){
    let m = specialMultiply(3);
    expect(specialMultiply(1)).toEqual(jasmine.any(Function));
    expect(m(5)).toEqual(15);
  });
  it("returns a the product of two numbers if two parameters are passed", function(){
    expect(specialMultiply(4)(5)).toEqual(20);
  });
});
// describe for guessing game;
describe("#guessingGame", function(){
  it("returns a function", function(){
    expect(guessingGame(4)).toEqual(jasmine.any(Function));
  });
  it("stops you from guessing once you have gotten the answer", function(){
    let g = guessingGame(4);
    g(0), g(1), g(2), g(3), g(4);
    expect(g(4)).toEqual("You are all done playing");
  });
});