//JavaScript Single-Line Practice
/*
  JavaScript Multi-line Practice
*/

var myName; //Variable declaration

//Storing values with assignment operator
var a;
a = 7;

//Assigning one value to another variable
var a;
a = 7;
var b;
b = a;

//Initializing variables with Assignment operator
var a = 9;

//Declare string variables
var myFirstName = "Swapnil";
var myLastName = "Tiwari";

//using let
let catName = "Oliver";
let catSound = "Meow!";

//using let and const
const FCC = "freeCodeCamp"; // can't change this later. usually const variables are written in all uppercase.
let fact = "is cool!"; // can change this 
fact = "is awesome!";
console.log(FCC, fact);

//Adding 2 numbers with JS
const sum = 10 + 10;

//Subtracting one from another
const difference = 45 - 33;

//Multiplying 2 numbers
const product = 8 * 10;

//Dividing one number by another
const quotient = 66 / 33;

//Increment operator
let myVar = 87;
myVar = ++myVar;

//Decrement operator
let myVar1 = 11;
myVar = --myVar;

//Decimal
const ourDecimal = 5.7;
let myDecimal = 2.22;
//Decimals can have all the operations like add, sub, mult, div

//Remainder Operator
const remainder = 11 % 3;

//Compound Assignment with Augmented Addition, Subtraction, Multiplication, Division
let a = 3;
a += 12;
a -= 2;
a *= 4;
a /= 2;

//Escaping Literal Quotes in Strings
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//Using "" and '' together
const myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>';

//Escape Sequences
const myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine";

//concatenating string with + operator
const myStr3 = "This is the start. " + "This is the end.";

//concatenating strings with += operator
let myStr4 = "This is the first sentence. ";
myStr += "This is the second sentence."

//constructing string with variables
const myName = "Swapnil";
const myStr5 = "Hello " + myName + ", Welcome";

//Appending Variables to strings
const someAdjective = "awesome";
let myStr6 = "Learning to code is ";
myStr += someAdjective;

//To find the length of a string
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

//JS has zero-based indexing
//bracket notation for indexing
let firstLetterOfLastName = "";
const lastName1 = "Lovelace";
firstLetterOfLastName = lastName[0];

//Bracket Notation - last character
const lastName2 = "Lovelace";
const lastLetterOfLastName = lastName[-1];
const lastLetterOfLastNameLength = lastName[lastName.length - 1];

//String immutablity - means strings can't be altered once created
let myStr7 = "Jello World";
myStr7 = "Hello World"; //can't alter the string but can change the value of the myStr7 value

//Arrays - can contain different types in the same array
const myArray = ["Swap", 10];

//nested Array
const myArray1 = [["Two", 2], ["One", 1]];

//Access Array Data with Indexes
const myArray2 = [50, 60, 70];
const myData = myArray[0];

//Modify Array Data with Indexes - Unlike strings the entries of arrays are mutable and can be changed freely
const myArray3 = [18, 64, 99];
myArray3[0] = 45;

//Access Multi-Dimension Arrays with Indexes
const myArray4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
const myData1 = myArray4[2][1];

//Maniplulate Arrays with push() - takes the number to be pushed in the last as the argument
const myArray5 = [["John", 23], ["cat", 2]];
myArray5.push(["dog", 3])

//Manipulate Arrays with pop() - pop off the value from the end of the array
const myArray6 = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray6.pop();

//Manipulate Arrays with shift() - pop off the first element
const myArray7 = [["John", 23], ["dog", 3]];
const removedFromMyArray1 = myArray6.shift();

//Manipulate Arrays with unshift() - push the first element
const myArray8 = [["John", 23], ["dog", 3]];
myArray8.shift();
myArray8.unshift(["Paul", 35]);

//Reusable JavaScript through Functions 
//Defining the function
function reusableFunction()
{
  console.log("Hi World");
}
//Invoking/Calling Function
reusableFunction();

//Passing values to the function as arguments
function functionWithArgs(a, b)
{
  console.log(a + b)
}
functionWithArgs(1, 2);

//Return a value from a function with Return
function timesFive(a)
{
  return a * 5;
}
console.log(timesFive(5)); //Returning first is better than console.log inside the function itself.

//Global Scopes and Functions - Scopes refers to the visibility of variables
//usually people use let and const since scope stays in the block.
//You can write same name for local and global scope variables. Local takes precedence over global

//you can include return statements but it is not necessary.
// Although if a value is changed in the function and there is no return statement- then the value will be undeined

//Assignment with a Returned Value
let processed = 0;
function processArg(num)
{
  return (num + 3) / 5;
}
processed = processArg(7);

//Queue - stand in a line
//pushing an item last and popping an item from the start
function nextInLine(arr, item)
{
  arr.push(item);
  let popItem = arr.shift();
  return popItem; //returns the popped out element
}
const testArr = [1, 2, 3, 4, 5];
console.log(nextInLine(testArr, 6));
console.log(testArr);

//Booleans - True or False

//Condition Logic using if statements
function trueOrFalse(wasThatTrue)
{
  if (wasThatTrue)
  {
    return "Yes, that was true"
  }
  return "No, that was false"
}

//Comparison with the equility operator
//Called the comparison operators
//If the values being compared are not of the same data type, the equility operator will perform a type conversion, and then evaluate the values. 
function testEqual(val)
{
  if (val == 12)
  {
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

//Comparison with strictly equility operator
// instead of ==, === is used.

//Inequility Operator !=
//Strict Inequility operator !==

//Comparison with Greater than operator
function testGreaterThan(val)
{
  if (val > 100)
  {  // Change this line
    return "Over 100";
  }
  if (val > 10)
  {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);

//Comparison with Greater than or Equal to >=
//Comparison with Less than operator <
//Comparison with Less than or equal to <=

//Comparison with Logical AND Operator &&
function testLogicalAnd(val)
{
  if (val <= 50 && val >= 25)
  {
    return "Yes";
  }
  return "No";
}
testLogicalAnd(10);

//Comparison with Logical OR Operator ||
function testLogicalOr(val)
{
  if (val < 10 || val > 20)
  {
    return "Outside";
  } return "Inside";
}
testLogicalOr(15);

// Else Statements
function testElse(val)
{
  let result = "";
  if (val > 5)
  {
    result = "Bigger than 5";
  }
  else
  {
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);

//Else if - Logical Order is important
function testElseIf(val)
{
  if (val > 10)
  {
    return "Greater than 10";
  }
  else if (val < 5)
  {
    return "Smaller than 5";
  }
  else
  {
    return "Between 5 and 10";
  }
}
testElseIf(7);

//Chaining If Else statements
function testSize(num)
{
  if (num < 5)
  {
    return "Tiny";
  }
  else if (num < 10)
  {
    return "Small";
  }
  else if (num < 15)
  {
    return "Medium";
  }
  else if (num < 20)
  {
    return "Large";
  }
  else return "Huge";
}
testSize(7);

//Switch statements
function caseInSwitch(val)
{
  let answer = "";
  switch (val)
  {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";;
      break;
    case 3:
      answer = "gamma";;
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "try again";
  }
  return answer;
}
caseInSwitch(1);

//Multiple Identical Options in Switch Statement
function sequentialSizes(val)
{
  let answer = "";
  switch (val)
  {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
      answer = "Low Mid";
      break;
    case 5:
    case 6:
      answer = "Mid";;
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";;
      break;
  }
  return answer;
}
sequentialSizes(1);

// Returning Boolean values from functions
function isLess(a, b)
{
  return (a < b)
}
isLess(10, 15);

//Objects - similar to arrays, but instead of using indexes to access them, we access them through Properties
const myDog = {
  name: "Mimi",
  legs: 4,
  tails: 1,
  friends: ["Ash", "Chow", "Bella"]
};

//Accessing Object Properties - You can access them throw 2 ways - (.)Dot Notation and ([]) Square Bracket Notation

//.Dot Notation
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

//[] Bracket Notation
const testObj1 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
const entreeValue = testObj1["an entree"];
const drinkValue = testObj1["the drink"];

//[] Bracket Notation
const testObj2 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
}
const playerNumber = 16;
const player = testObj2[playerNumber];


testObj.hat = "happy ballcap"
testObj2[12] = "yesletsgo";

//Updating Object Properties and adding new properites
const myDog1 = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog1.name = "Happy Coder"
myDog1["legs"] = 4;
myDog1.friends.push("we will rock you"); //adding new element to the array
myDog1.bark = "woof";
delete myDog1.tails; //deleting property in object

//Testing objects for properties
function checkObj(obj, checkProp)
{
  if (obj.hasOwnProperty(checkProp))
  {
    return obj[checkProp];
  }
  else
  {
    return "Not Found"
  }
}
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"))

//Manipulating Complex Objects
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": ["CD", "Cassette", "LP"]
  }
];

//Accessing Nested Objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside["glove box"];

// Accessing nested arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
const secondTree = myPlants[1].list[1];

//iterate with while loop
const myArray9 = [];
let i = 5;
while (i >= 0)
{
  myArray9.push(i);
  i--;
}

// Iterate with for loops
const myArray10 = [];
for (let i = 1; i <= 5; i++)
{
  myArray10.push(i);
}

//for loops- odd numbers
const myArray11 = [];
for (let i = 1; i <= 9; i += 2)
{
  myArray11.push(i);
}

//nested loops
function multiplyAll(arr)
{
  let product = 1;
  for (let i = 0; i < arr.length; i++)
  {
    for (let j = 0; j < arr[i].length; j++)
    {
      product *= arr[i][j];
    }
  }
  return product;
}
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

//do...while loop
// Setup
const myArray12 = [];
let i2 = 10;
do
{
  myArray.push(i);
  i2++;
} while (i2 < 11)

console.log(myArray)