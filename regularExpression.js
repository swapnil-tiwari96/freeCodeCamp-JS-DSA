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

// Match anything with Wildcard Period (.)
// Will return true or false
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./i; // use of . and i together as well
console.log(unRegex.test(exampleStr)); // used test here so will result into true or false

// Match single character with multiple possibilities - we use character class[]
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex); // used match here so will return 
// Sometimes using in between words like this- /b[aiu]g/

// Match letters of the Alphabet
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // every letter from a to z
console.log(quoteSample1.match(alphabetRegex));

// Match numbers and letters of the alphasbet
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/ig;
console.log(quoteSample2.match(myRegex1));

// Match single characters not specified - characters you don't want to match. These types of character sets are called negated character sets
// To create a negated set - (^) is used
let quoteSample3 = "3 blind mice.";
let myRegex2 = /[^aeiou0-9]/ig;
console.log(quoteSample3.match(myRegex2));

// Match characters that occur one or more times in a row (+)
let difficultSpelling = "Mississippi";
let myRegex3 = /s+/g; //+ and g both used here
console.log(difficultSpelling.match(myRegex3));

// Match characters that occur zero or more times (*)
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
console.log(chewieQuote.match(chewieRegex));

// Find characters with lazy matching
// In regular expression, a greedy match finds the longest possible part of the string that fits the regex  pattern and returns it as a match.
// The alternative is called the lazy match, which finds the smallest possible part of the string that satisfies the regex pattern. (?)
let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<.*?>/;
console.log(text.match(myRegex4));

// Match beginning string patterns - (^) outside of character set is used for patterns at the beginning of strings
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
console.log(calRegex.test(rickyAndCal));

// Match ending string patterns - ($)
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
console.log(lastRegex.test(caboose));

// Match all letters and numbers - (\w)
let quoteSample6 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
console.log(quoteSample.match(alphabetRegexV2).length);

// Match everything but letters and numbers - (\W)
let nonAlphabetRegex = /\W/g; //Using above quoteSample
console.log(quoteSample6.match(nonAlphabetRegex).length);

// Match all numbers - (\d)
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
console.log(movieName.match(numRegex).length);

// Match all non-numbers - (\D)
let noNumRegex = /\D/g; // Using above moveiName
console.log(movieName.match(noNumRegex).length);

// Match Whitespace - (\s)
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
console.log(sample.match(countWhiteSpace));

// Match non-Whitespace - (\S)
let countNonWhiteSpace = /\S/g; //Using above sample
console.log(sample.match(countNonWhiteSpace));

// Specify Upper and Lower number of matches - ({})
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
console.log(ohRegex.test(ohStr));

// Specify only the lower number of matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; //z can be 4 or more here
console.log(haRegex.test(haStr));

// Specify exact number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // 4 only
console.log(timRegex.test(timStr));

// Check for all or none - (?)
let favWord = "favorite";
let favRegex = /favou?rite/;
console.log(favRegex.test(favWord));

// Positive and Negative lookaheads
// Lookaheads are patterns that tell JS to look ahead in your string to check for patterns further along.
// This can be useful when you want to search for multiple patterns over the same string
// Postive Lookahead will look to make sure the element in the search pattern is there, but won't actually match it (?=)
// Negative Lookahead will look to make sure the element in the search pattern is not there (?!)
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
console.log(pwRegex.test(sampleWord));

// Check for mixed grouping of characters
let myString2 = "Eleanor Roosevelt";
let myRegex5 = /(Franklin|Eleanor).*Roosevelt/;
console.log(myRegex.test(myString));

// Resuse patterns using captured groups
// Capture groups are constructed by enclosing the regex pattern to be captured in parantheses.
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
console.log(reRegex.test(repeatNum));

// Use capture groups to search and replace (.replace())
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
console.log(str.replace(fixRegex, replaceText));

