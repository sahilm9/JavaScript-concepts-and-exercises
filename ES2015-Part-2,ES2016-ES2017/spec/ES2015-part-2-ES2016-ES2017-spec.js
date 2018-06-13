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
