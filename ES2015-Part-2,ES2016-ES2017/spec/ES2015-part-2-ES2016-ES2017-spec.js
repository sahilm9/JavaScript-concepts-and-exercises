// constructors
// describe for Person
describe("Person", function(){
    var sahil = new Person("Sahil", "Mokkapati", "red", 9);
    describe("class Person", function(){
      it("has a firstName", function(){
        expect(sahil.hasOwnProperty('firstName')).toEqual(true);
      });
      it("has a lastName", function(){
        expect(sahil.hasOwnProperty('lastName')).toEqual(true);
      });
      it("has a favoriteColor", function(){
        expect(sahil.hasOwnProperty('favoriteColor')).toEqual(true);
      });
      it("has a favoriteNumber", function(){
        expect(sahil.hasOwnProperty('favoriteNumber')).toEqual(true);
      });
  });

  describe("#multiplyFavoriteNumber", function(){
    it("takes in a number and returns the product of the number and the Person's favorite number", function(){
      expect(sahil.multiplyFavoriteNumber(9)).toEqual(81);
    });
  });
});
// Inheritance and super
// describe for Vehicle
describe("Vehicle", function(){
  var vehicle = new Vehicle('Tesla', 'Semi', 2017);
    describe("class Vehicle", function(){
      it("has a firstName", function(){
        expect(vehicle.hasOwnProperty('make')).toEqual(true);
      });
      it("has a lastName", function(){
        expect(vehicle.hasOwnProperty('model')).toEqual(true);
      });
      it("has a favoriteColor", function(){
        expect(vehicle.hasOwnProperty('year')).toEqual(true);
      });
  });

  describe("#start", function(){
    it("returns the string VROOM!", function(){
      expect(vehicle.start()).toEqual('VROOM!');
    });
  });

  describe("#toString", function(){
    it("returns a string with the make, model and year", function(){
      expect(vehicle.toString()).toEqual('The make, model, and year are Tesla Semi 2017');
    });
  });
});
// describe for Car
describe("Car", function(){
  var car = new Car("Jaguar", "XF", 2018);
    describe("class Car", function(){
      it("has a firstName", function(){
        expect(car.hasOwnProperty('make')).toEqual(true);
      });
      it("has a lastName", function(){
        expect(car.hasOwnProperty('model')).toEqual(true);
      });
      it("has a favoriteColor", function(){
        expect(car.hasOwnProperty('year')).toEqual(true);
      });
      it("has a numWheels", function(){
        expect(car.hasOwnProperty('numWheels')).toEqual(true);
        expect(car.numWheels).toEqual(4);
      });
      it("has the correct constructor", function(){
        expect(car.constructor).toEqual(Car);
      });
  });
  describe("#Car Methods", function(){
    it("has a start method", function(){
      expect(car.start()).toEqual('VROOM!')
    });
    it("has a toString method", function(){
      expect(car.toString()).toEqual('The make, model, and year are Jaguar XF 2018')
    });
  });
});
// describe for Motorcycle
describe("Motorcycle", function(){
  var motorcycle = new Motorcycle("Harley Davidson", "Street 500", 2018);
  describe("class Motorcycle", function(){
    it("has a firstName", function(){
      expect(motorcycle.hasOwnProperty('make')).toEqual(true);
    });
    it("has a lastName", function(){
      expect(motorcycle.hasOwnProperty('model')).toEqual(true);
    });
    it("has a favoriteColor", function(){
      expect(motorcycle.hasOwnProperty('year')).toEqual(true);
    });
    it("has a numWheels", function(){
      expect(motorcycle.hasOwnProperty('numWheels')).toEqual(true);
      expect(motorcycle.numWheels).toEqual(2);
    });
    it("has the correct constructor", function(){
      expect(motorcycle.constructor).toEqual(Motorcycle);
    });
  });
  describe("#Motorcycle Methods", function(){
    it("has a start method", function(){
      expect(motorcycle.start()).toEqual('VROOM!');
    });
    it("has a toString method", function(){
      expect(motorcycle.toString()).toEqual('The make, model, and year are Harley Davidson Street 500 2018');
    });
  });
});
// Maps and sets
// describe's for MessageBoard and it's methods
describe("#MessageBoard", function(){
  var m = new MessageBoard;
  it("has a messages property which is initialized to an empty map", function(){
    expect(m.messages.constructor).toEqual(Map);
  });
  it("has an id property which is initialized to at 1", function(){
    expect(m.hasOwnProperty('id')).toEqual(true);
    expect(m.id).toEqual(1);
  });
});
describe("#addMessage", function(){
  var m = new MessageBoard;
  it("adds a message successfully", function(){
    m.addMessage('hello');
    expect(m.messages.size).toEqual(1);
  });
  it("returns the messageBoard object after adding so that the method can be chained", function(){
    var m = new MessageBoard;
    expect(m.addMessage('awesome!')).toEqual(m);
    expect(m.addMessage('awesome!').addMessage('nice!').addMessage('cool!')).toEqual(m);
  });
});
describe("#findMessageById", function(){
  var m = new MessageBoard;
  m.addMessage('JavaScript');
  m.addMessage('React');
  m.addMessage('Babel');
  it("finds a message by its value", function(){
    expect(m.findMessageById(1)).toEqual('JavaScript');
    expect(m.findMessageById(2)).toEqual('React');
    expect(m.findMessageById(3)).toEqual('Babel');
    expect(m.findMessageById(4)).toEqual(undefined);
    expect(m.findMessageById()).toEqual(undefined);
  });
});
describe("#findMessageByValue", function(){
  var m = new MessageBoard;
  m.addMessage('JavaScript');
  m.addMessage('React');
  m.addMessage('Babel');
  it("finds a message by its value", function(){
    expect(m.findMessageByValue('JavaScript')).toEqual('JavaScript');
    expect(m.findMessageByValue('React')).toEqual('React');
    expect(m.findMessageByValue('Babel')).toEqual('Babel');
    expect(m.findMessageByValue('nothing here')).toEqual(undefined);
    expect(m.findMessageByValue()).toEqual(undefined);
  });
});
describe("#removeMessage", function(){
  var m = new MessageBoard;
  m.addMessage('JavaScript');
  m.addMessage('React');
  m.addMessage('Babel');
  it("removes a message by id", function(){
    m.removeMessage(1);
    m.removeMessage(2);
    expect(m.messages.size).toEqual(1);
  });
  it("returns the message board object so the method can be chained", function(){
    expect(m.removeMessage(4)).toEqual(`Couldn't find the key`);
  });
});
describe("#numberOfMessages", function(){
  var m = new MessageBoard;
  m.addMessage('JavaScript');
  m.addMessage('React');
  m.addMessage('Babel');
  it("returns the numer of messages in the message board", function(){
    expect(m.numberOfMessages()).toEqual(3);
  });
});
describe("#messagesToArray", function(){
  var m = new MessageBoard;
  m.addMessage('JavaScript');
  m.addMessage('React');
  m.addMessage('Babel');
  it("converts all the values in the messages map to an array", function(){
    expect(m.messagesToArray()).toEqual(['JavaScript', 'React', 'Babel']);
  });
});
// describe for uniqueValues function
describe("#uniqueValues", function(){
  it("returns the number of unique values in an array", function(){
    expect(uniqueValues([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6,7,7,8])).toEqual(8);
  });
});
// describe for hadDuplicates function
describe("#hasDuplicates", function(){
  it("returns true if there are duplicate values in the array", function(){
    expect(hasDuplicates([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6])).toEqual(true);
  });
  it("returns false if there are no duplicates", function(){
    expect(hasDuplicates([1,2,3,4,5,6])).toEqual(false);
    expect(hasDuplicates([])).toEqual(false);
  });
});
// describe for countPairs function
describe("#countPairs", function(){
  it("returns the number of pairs that sum to the second_parameter", function(){
    expect(countPairs([8,2,6,4,10,0],10)).toBe(3);
    expect(countPairs([8,2],10)).toBe(1);
    expect(countPairs([1,2],10)).toBe(0);
    expect(countPairs([1,2,3,4,5],10)).toBe(0);
    expect(countPairs([],10)).toBe(0);
  });
  it("handles negative numbers", function(){
    expect(countPairs([5,4,-10,6,-20,16],-4)).toBe(2);
    expect(countPairs([0,-4],-4)).toBe(1);
  });
});
// describe for starWarsString function
describe("#starWarsString", function(){
  it("returns a string with the most followers", function(done){
    starWarsString(1).then(function(result){
      expect(result).toEqual('Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth');
      done();
    })
    starWarsString(5).then(function(result){
      expect(result).toEqual('Leia Organa is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth');
      done();
    })
  });
});
// describe for copy object function
describe("#copyObject", function(){
  var obj1 = {name: 'Sahil'};
  it("makes a copy of an object and removes the reference", function(){
    var obj2 = copyObject({}, obj1);
    obj2.name = "John";
    expect(obj1.name).toEqual('Sahil');
    expect(obj2.name).toEqual('John');
  });
});
// describe for checkIfFinite function
describe("#checkIfFinite", function(){
  it("accepts a number and checks if it is finite", function(){
    expect(checkIfFinite(4)).toEqual(true);
    expect(checkIfFinite(-3)).toEqual(true);
    expect(checkIfFinite(4.3)).toEqual(true);
    expect(checkIfFinite(NaN)).toEqual(false);
    expect(checkIfFinite(Infinity)).toEqual(false);
  });
});
// describe for areAllNumbersFinite function
describe("#areAllNumbersFinite", function(){
  var finiteNums = [4,-3,2.2];
  var finiteNumsExceptOne = [4,-3,2.2,NaN];
  it("accepts an array and returns true if every number is finite", function(){
    expect(areAllNumbersFinite(finiteNums)).toEqual(true);
    expect(areAllNumbersFinite(finiteNumsExceptOne)).toEqual(false);
  });
});
// describe for convertArrayLikeObject function
describe("#convertArrayLikeObject", function(){
  it("coverts an array like object into an array", function(){
    var divs = document.getElementsByTagName('div');
    expect(divs.reduce).toEqual(undefined);
    var converted = convertArrayLikeObject(divs);
    expect(converted.reduce).toEqual(jasmine.any(Function));
  });
});
// describe for displayEvenArguments function
describe("#displayEvenArguments", function(){
  it("returns a new array of all the even arguments passed to a function", function(){
    expect(displayEvenArguments(1,2,3,4,5,6)).toEqual([2,4,6]);
    expect(displayEvenArguments(-2,8,2)).toEqual([-2,8,2]);
    expect(displayEvenArguments(1,3,7)).toEqual([]);
  });
});
// describe for starWarsString1 function
describe("#starWarsString1", function(){
  it("returns a string with the most followers", function(done){
    starWarsString(1).then(function(result){
      expect(result).toEqual('Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth');
      done();
    })
    starWarsString(5).then(function(result){
      expect(result).toEqual('Leia Organa is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth');
      done();
    })
  });
});































// // Arrow functions
// describe("#tripleAndFilter", function(){
//   it("triples an array of numbers and returns an array of all those numbers divisible by 5", function(){
//     expect(tripleAndFilter([2,3,5])).toEqual([15]);
//   });
// });
//
// describe("#doubleOddNumbers", function(){
//   it("returns a new array of all odd numbers doubled", function(){
//     expect(doubleOddNumbers([1,3,4,6])).toEqual([2,6]);
//   });
// });
//
// describe("#mapFilterAndReduce", function(){
//   it("maps over an array and filters for a length less than 5 and reduces into an object with the key as the name and value as the length", function(){
//     var arr = mapFilterAndReduce([{firstName: 'Sahil'}, {firstName: 'Jane'}, {firstName: 'John'}]);
//     expect(arr).toEqual({Jane: 4, John: 4});
//   });
// });
//
// describe("#createStudent", function(){
//   it("returns an object with the keys and values of firstName and lastName", function(){
//     expect(createStudentObj('Sahil', 'Mokkapati')).toEqual({firstName: 'Sahil', lastName: 'Mokkapati'});
//   });
// });
//
// describe("#smallestValue", function(){
//   it("returns the smallest value for a variable number of arguments", function(){
//     expect(smallestValue(5,1,19,-1)).toEqual(-1);
//     expect(smallestValue(4,-4,-1,1)).toEqual(-4);
//     expect(smallestValue(0,1)).toEqual(0);
//     expect(smallestValue(45,12,2.2)).toEqual(2.2);
//   });
// });
//
// describe("#placeInMiddle", function(){
//   it("places a list of values in the middle of an array", function(){
//     expect(placeInMiddle([1,3,5,7],[2,4,6])).toEqual([1,3,2,4,6,5,7]);
//     expect(placeInMiddle([3],[0,1,2])).toEqual([0,1,2,3]);
//     expect(placeInMiddle([5,7],[1,2.2,3.3,4.4])).toEqual([5,1,2.2,3.3,4.4,7]);
//     expect(placeInMiddle([],[2.2,3.3,4.4,5.5])).toEqual([2.2,3.3,4.4,5.5]);
//   });
// });
//
// describe("#joinArrays", function(){
//   it("returns a single array of all the parameters concatenated together", function(){
//     expect(joinArrays([-4],[-2],[3])).toEqual([-4,-2,3]);
//     expect(joinArrays([-1],[-2],[1],[2],[-1],[-2])).toEqual([-1,-2,1,2,-1,-2]);
//     expect(joinArrays([-1,-2,-3],[4,5,6],[-7,-8,-9])).toEqual([-1,-2,-3,4,5,6,-7,-8,-9]);
//     expect(joinArrays([-1],[3],[0],[-7])).toEqual([-1,3,0,-7]);
//   });
// });
//
// describe("#sumEvenArgs", function(){
//   it("returns the sum of even arguments passed to the function", function(){
//     expect(sumEvenArgs(1,-2,3,4,5)).toEqual(2);
//     expect(sumEvenArgs(-1,-2,3,-4,5,6)).toEqual(0);
//     expect(sumEvenArgs(-1,-3,-5,-7,-9)).toEqual(0);
//   });
// });
//
// describe("#flip", function(){
//   function subtractFiveNumbers(a,b,c,d,e){
//     return a-b-c-d-e;
//   }
//   function personSubtract(a,b,c,d){
//     return this.firstName + " subtracts " + (a-b-c-d);
//   }
//   let person = {
//     firstName: 'Sahil'
//   }
//   it("returns a function", function(){
//     expect(flip()).toEqual(jasmine.any(Function))
//   });
//   it("is invoked with the value of the keyword this passed to the function", function(){
//     var flipFn = flip(personSubtract, person);
//     expect(flipFn(3,2,1,4)).toEqual("Sahil subtracts -2");
//     var flipFn = flip(personSubtract, person, 9,2);
//     expect(flipFn(4,7)).toEqual("Sahil subtracts -8");
//   });
//   it("is invoked with the remaining arguments from the outer function and inner function", function(){
//     expect(flip(subtractFiveNumbers,this,1)(2,3,4,5)).toEqual(-5);
//     expect(flip(subtractFiveNumbers,this,1,2)(3,4,5)).toEqual(-5);
//     expect(flip(subtractFiveNumbers,this,1,2,3)(4,5)).toEqual(-5);
//     expect(flip(subtractFiveNumbers,this,1,2,3,4,5)()).toEqual(-5);
//     expect(flip(subtractFiveNumbers,this)(1,2,3,4,5)).toEqual(-5);
//     expect(flip(subtractFiveNumbers,this,1,2,3)(4,5,6,7)).toEqual(-5);
//     expect(flip(subtractFiveNumbers,this)(1,2,3,4,5,6,7,8,9,10)).toEqual(-5);
//     expect(flip(subtractFiveNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10)).toEqual(-35);
//   });
// });
//
// describe("#displayStudentInfo", function(){
//   it("returns a string with the first value and last value of an object", function(){
//     var obj = {first: 'Sahil', last:'Mokkapati'}
//     expect(displayStudentInfo(obj)).toEqual('Your full name is Sahil Mokkapati');
//   });
// });
//
// describe("#printFullName", function(){
//   it("returns a string with the first value and last value of an object with a destructured parameter", function(){
//     var obj = {first: 'Sahil', last:'Mokkapati'}
//     expect(printFullName(obj)).toEqual('Your full name is Sahil Mokkapati');
//   });
// });
//
// describe("#createStudent", function(){
//   it("returns a string with the first value and last value of an object with a destructured parameter", function(){
//     expect(createStudent()).toEqual('The student likes JavaScript and ES2015')
//     expect(createStudent({likesES2015:false})).toEqual('The student likes JavaScript!')
//     expect(createStudent({likesJavaScript:false})).toEqual('The student likes ES2015!')
//     expect(createStudent({likesJavaScript:false,likesES2015:false})).toEqual('The student does not like much...')
//   });
// });
//
// describe("#reverseArray", function(){
//   it("reverses values in an array", function(){
//     var arr = [-1,-2,-3,-4,-5];
//     var arr2 = [function(){},{},'Hi',2];
//     var arr3 = [];
//     var arr4 = [1,2,3,4,5,6,7,8,9,10];
//     expect(reverseArray(arr)).toEqual([-5,-4,-3,-2,-1])
//     expect(reverseArray(arr2)).toEqual([2,'Hi',jasmine.any(Object),jasmine.any(Function)]);
//     expect(reverseArray(arr3)).toEqual([]);
//     expect(reverseArray(arr4)).toEqual([10,9,8,7,6,5,4,3,2,1]);
//   });
// });