// Match anything with Wildcard Period ().
// Will return true or false
let exampleStr = "Let's have fun with regular run sun expressions!";
let unRegex = /un/i; // use of . and i together as well
console.log(unRegex.test(exampleStr)); // used test here so will result into true or false
console.log(exampleStr.match(unRegex))