// Regular Expressions are used in programming languages to match parts of strings. You can create patterns to help you do that matching.
// Regular Expression don't use qoutes, as you will see in the below example. It uses /{the word to find}/

// Using the test method
//return true or false
let myString = "Hello, World!";
let myRegex = /Hello/;
console.log(myRegex.test(myString));
//Matching Literal strings - the test() will match the exact form i.e case-sensitive. Other than that it will return false.

// Match a Literal string with different possibilities - use | (OR)
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
console.log(petRegex.test(petString));

// Ignore case(difference between lowercase and uppercase) while matching - using the flag i
let myString1 = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
console.log(fccRegex.test(myString1));

// Extract Matches - .match() - the syntax is opposite to .test()
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
console.log(extractStr.match(codingRegex)); //will output the first regex inside the parantheses. See the result. Very interesting

// Find more than the first match - using the flag g
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; //notice two flags are used here
console.log(twinkleStar.match(starRegex));

// Match anything with Wildcard Period ().
// Will return true or false
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./i; // use of . and i together as well
console.log(unRegex.test(exampleStr)); // used test here so will result into true or false

// Match single character with multiple possibilities - we use character class[]
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex); // used match here so will return 
// Sometimes using in between words like this- /b[aiu]g/