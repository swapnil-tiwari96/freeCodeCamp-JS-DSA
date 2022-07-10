// Creat a Basic Object
let dog = {
    name: "tin",
    numLegs: 4
};

// Use dot notation to access property of an object
console.log(dog.name);
console.log(dog.numLegs);

// Create a method on an object
// Objects have special type of property called the method
let dog1 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: () => console.log("This dog has " + dog1.numLegs + " legs.")
};
console.log(dog1.sayLegs());

// Make code more reusable with the this keyword
let dog2 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};
dog2.sayLegs();

// Define a constructor function - Although everything is handled by classes now. So converting everything to class
// Classes are defined with a capitalized name to distinguish them from other functions that are not constructors.
// Classes use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
// Classes define properties and behaviors instead of returning a value as other functions might.
class Dog
{
    constructor()
    {
        this.name = "Albert";
        this.color = "Brown";
        this.numLegs = 4;
    }
}

// Use classes to create Objects
let hound = new Dog();

class Dog1
{
    constructor(name, color)
    {
        this.name = name;
        this.color = color;
        this.numLegs = 4;
    }
}

// Extent classes to receive arguments
let terrier = new Dog1("Rubert", "Black")

// Verify an Object's constructor with instanceOf
class House
{
    constructor(numBedrooms)
    {
        this.numBedrooms = numBedrooms;
    }
}
let myHouse = new House(100);
myHouse instanceof House;

// Use prototype properties to reduce code - since it won't have to save the same property for every instance
class Dog
{
    constructor(name)
    {
        this.name = name; //own property
    }
}
Dog.prototype.numLegs = 4; //prototype property
let beagle = new Dog("Snoopy");
console.log(beagle.numLegs); //will output 4

// Iterate over all properties
for (let property in beagle)
{
    if (beagle.hasOwnProperty(property)) //ownProperty
    {
        ownProps.push(property);
    } else
    {
        prototypeProps.push(property); //prototype property
    }
}

// Change the Prototype to a New Object - adding properties to the prototype individually becomes tedious
// So better to set the prototype to a new object
class Dog
{
    constructor(name)
    {
        this.name = name;
    }
}

Dog.prototype = {
    numLegs: 4,
    eat: function ()
    {
        console.log("nom nom nom");
    },
    describe: function ()
    {
        console.log("My name is " + this.name);
    }
};

// Remember to put the constructor property when changing the prototype
// One crucial side effect while manually setting the prototype to a new object - it erases the constructor property. 
// To fix that, whenever a prototype is manually set to a new object, remember to define the constructor property.  
class Dog
{
    constructor(name)
    {
        this.name = name;
    }
}
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function ()
    {
        console.log("nom nom nom");
    },
    describe: function ()
    {
        console.log("My name is " + this.name);
    }
};

// Understand where an objects prototype comes from
class Dog
{
    constructor(name)
    {
        this.name = name;
    }
}
let beagle1 = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle1);

// Undertand the prototype chain
// All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

// Inheritence

// parent class
class Person
{
    constructor(name)
    {
        this.name = name;
    }
    greet()
    {
        console.log(`Hello ${this.name}`);
    }
}
// inheriting parent class
class Student extends Person { }
let student1 = new Student('Jack');
student1.greet();
