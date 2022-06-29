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