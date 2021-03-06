//Scope of let and var keywords - 
//var keyword is usually declared globally or locally if declared inside the function
//let keyword's scope is limited to the block, statement or expression only.
function checkScope()
{
    let i = 'function scope';
    if (true)
    {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

// Mutate an array with const 
const s = [5, 7, 2];
function editInPlace()
{
    // Using s = [2, 5, 7] would be invalid
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();

// Prevent Object Mutation
Object.freeze(obj_name);

//Arrow Functions
const magic = () => new Date();

//Arrow function with parameters
const myConcat = (arr1, arr2) =>
{
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));

// Default Parameters in Arrow Function
const increment = (number, value = 1) => number + value;

//Rest Parameter with Function Parameters - take variable number of arguments. These arguments are stored in an array which can be accessed later.
const sum = (...args) =>
{
    return args.reduce((a, b) => a + b, 0);
}

//Spread Operator - allows to expand arrays and other expressions in places where multiple parameters or elements are expected
//Only works while being in a array literal or a function argument
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = [...arr1];
console.log(arr2);

// Using destructuring Assignment to exctract values from objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
const { today, tomorrow } = HIGH_TEMPERATURES;

//Use Destructuring Assignment to assign variables from objects
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES; //from the above object
console.log(highToday, highTomorrow);
console.log(today, tomorrow); //this will throw error now

//Use Destructurig Assignment to assign variables from nested objects
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
const { today: { low: lowToday, high: highToday1 } } = LOCAL_FORECAST
console.log(lowToday, highToday1, LOCAL_FORECAST.yesterday.low)

//Use destructuring assignment to assign variables from arrays
/*Key difference between spread operator and destructuring is that spread operator unpacks all the contents of an array
into an comma-seperated list. Consequently, you cannot pick or choose which elements you want to assign to variables
*/
const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

// Use Destructuring Assignment with the Rest parameter to reassign Array elements
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list)
{
    const [a, b, ...arr] = list
    return arr;
}
const arr = removeFirstTwo(source);

// Using Destructuring assignment to pass an object as function parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = ({ max, min }) => (max + min) / 2.0;

//Create string using template literal
const person = {
    name: "Zodiac Hasbro",
    age: 56
};
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

//Write concise Object literal declaration using object property shorthand
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});
//Instead of the above you can write the below:
const getMousePositionRe = (x, y) => ({ x, y });

//Write concise Declarative functions with ES6
const bicycle = {
    gear: 2,
    setGear(newGear)
    {
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//Use class syntax to define constructor function
class Vegetable
{
    constructor(name)
    {
        this.name = name;
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);

//Use getters and setters to control Access to an object
class Thermostat
{
    constructor(fah)
    {
        this.fah = fah;
    }
    get temperature()
    {
        return 5 / 9 * (this.fah - 32);
    }
    set temperature(cel)
    {
        this.fah = cel * 9 / 5 + 32;
    }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

//Create a module script
<html>
    <body>
        <script type="module" src="index.js"></script>
    </body>
</html>

//Use export to share a code block
const uppercaseString = (string) =>
{
    return string.toUpperCase();
}
const lowercaseString = (string) =>
{
    return string.toLowerCase()
}
export { uppercaseString, lowercaseString };

//Reuse JS code using import
import { uppercaseString, lowercaseString } from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!");

// Use * to import everything from a file
import * as stringFunctions from './string_functions.js';
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// Create an Export fallback with export default
export default function subtract(x, y)
{
    return x - y;
}

//Import a default Export
import subtract from './math_functions.js'
subtract(7, 4);

// Create a JS promise - do something later usually asychronously. When the task completes, you either fullfil your promise or fail to do so. 
const myPromise = new Promise((resolve, reject) =>
{ })

// Complete a promise with resolve and reject - A promise has three states pending, fullfilled and rejected.
// The below example uses string for the argument for the function, but there can be anything. 
const makeServerRequest = new Promise((resolve, reject) =>
{
    let responseFromServer;
    if (responseFromServer)
    {
        resolve("We got the data");
    } else
    {
        reject("Data not received");
    }
});

/* Handle a fullfilled promise with then - promises are most useful when you have a process that takes an unknown amount of time in your code
(sometimes asynchronous), often a server request.
*/
// using the above code
makeServerRequest.then(result =>
{
    console.log(result);
})

/* Handle a Rejected Promise with catch - catch is the method used when the promise has been rejected. 
It is executed immediately after a promise's reject method is called. 
*/
//using the above 2 set of code
makeServerRequest.catch(error =>
{
    console.log(error)
})
