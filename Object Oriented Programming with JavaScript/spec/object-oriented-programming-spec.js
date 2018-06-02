// describe for Person constructor
describe("Person", function(){
  var person = new Person("Sahil", "Mokkapati", "red", 9)
  it("person is an object", function(){
    expect(person).toEqual(jasmine.any(Object));
  });
  it("has a firstName", function(){
    expect(person.hasOwnProperty('firstName')).toEqual(true);
  });
  it("has a lastName", function(){
    expect(person.hasOwnProperty('lastName')).toEqual(true);
  });
  it("has a favoriteColor", function(){
    expect(person.hasOwnProperty('favoriteColor')).toEqual(true);
  });
  it("has a favoriteNumber", function(){
    expect(person.hasOwnProperty('favoriteNumber')).toEqual(true);
  });
  it("returns correct value from multiply method", function(){
    expect(person.multiplyFavoriteNumber(4)).toBe(36);
  });
});
// Prototypes, describe for ThirdPerson constructor
describe("ThirdPerson", function(){
    describe("ThirdPerson constructor", function(){
      var jane = new ThirdPerson('Jane' , 'Doe', 'grey', '2');
      it("has a firstName", function(){
        expect(jane.hasOwnProperty('firstName')).toEqual(true);
      });
      it("has a lastName", function(){
        expect(jane.hasOwnProperty('lastName')).toEqual(true);
      });
      it("has a favoriteColor", function(){
        expect(jane.hasOwnProperty('favoriteColor')).toEqual(true);
      });
      it("has a favoriteNumber", function(){
        expect(jane.hasOwnProperty('favoriteNumber')).toEqual(true);
      });
    });

    describe("#fullName", function(){
      var jane = new ThirdPerson('Jane' , 'Doe', 'grey', '2');
      it("returns the firstName concatenated with the lastName", function(){
        expect(jane.fullName()).toEqual("Jane Doe");
      });
    });

    describe("family", function(){
      it("is initialized as an empty array on the ThirdPerson object", function(){
        var jane = new ThirdPerson('Jane' , 'Doe', 'grey', '2');
        var p2 = new Person();
        expect(jane.family).toBeDefined();
        expect(Array.isArray(jane.family)).toEqual(true);
        expect(jane.family.length).toEqual(0);
      });
    });

    describe("#addToFamily", function(){
      it("is not shared amongst all objects created from the ThirdPerson constructor", function(){
        let richard = new ThirdPerson('Richard' , 'Doe', 'blue', '2');
        var somePerson = new ThirdPerson();
        richard.addToFamily(richard);
        expect(somePerson.family.length).toEqual(0);
      });
      it("adds a new person to the family array ONCE", function(){
        var jane = new ThirdPerson('Jane' , 'Doe', 'grey', '2');
        var p1 = new ThirdPerson();
        var p2 = new ThirdPerson();
        jane.addToFamily(p1);
        jane.addToFamily(p1);
        jane.addToFamily(p1);
        expect(jane.family.length).toEqual(1);
      });
      it("only adds objects created from the ThirdPerson constructor to the array", function(){
        var jane = new ThirdPerson('Jane' , 'Doe', 'grey', '2');
        var p1 = new ThirdPerson();
        var p2 = new ThirdPerson();
        jane.addToFamily(p1);
        jane.addToFamily("test");
        jane.addToFamily({});
        jane.addToFamily([]);
        jane.addToFamily(false);
        expect(jane.family.length).toEqual(1);
      });
    });
});
// describe for Array.prototype.map function
describe("Array.prototype.map", function(){
  var arr = [3,5,2,1];
  it("returns a new array of values with a callback run on each value", function(){
    expect(arr.map(value => value*2)).toEqual([6,10,4,2]);
  });
  it("allows access to the index as a second parameter", function(){
    expect(arr.map((value,index) => value*index)).toEqual([0,5,4,3]);
  });
  it("allows access to the array as the third parameter", function(){
    expect(arr.map((value,index,arr) => arr.length)).toEqual([4,4,4,4]);
  });
});
// describe for String.prototype.reverse function
describe("String.prototype.reverse", function(){
  it("returns a new reversed string", function(){
    expect("test".reverse()).toEqual("tset");
    expect("tacocat".reverse()).toEqual("tacocat");
  });
});
// describe for Vehicle constructor
describe("Vehicle", function(){
  var vehicle = new Vehicle('Tesla', 'Semi', 2017);
  describe("Vehicle constructor", function(){
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
// describe for Car constructor
describe("Car", function(){
  var car = new Car("Jaguar", "XF", 2018);
  describe("Car constructor", function(){
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
      expect(car.start()).toEqual('VROOM!');
    });
    it("has a toString method", function(){
      expect(car.toString()).toEqual('The make, model, and year are Jaguar XF 2018');
    });
  });
});
// describe for Motorcycle constructor
describe("Motorcycle", function(){
  var motorcycle = new Motorcycle("Harley Davidson", "Street 500", 2018);
  describe("Motorcycle constructor", function(){
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
      expect(motorcycle.start()).toEqual('VROOM!')
    });
    it("has a toString method", function(){
      expect(motorcycle.toString()).toEqual('The make, model, and year are Harley Davidson Street 500 2018');
    });
  });
});
