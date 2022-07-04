// Use an array to store a collection of data
// All arrays have .length property
// There can be one or more dimension array
let yourArray = [0, true, "false", 3, 4];
console.log(yourArray.length);

// Access an array's content through bracket notation
let myArray = ["a", "b", "c", "d"];
myArray[1] = "aca"
console.log(myArray);

// Add items to an array with push() and unshift()
// push adds to the last. unshift adds to the front
function mixedNumbers(arr)
{
    arr.unshift("I", 2, "three")
    arr.push(7, "VIII", 9)
    return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));

// Remove items from an array with pop() and shift()
//pop removes from the last. shift removes from front
function popShift(arr)
{
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));

// Remove items using splice() - helps you remove any number of consecutive elements from anywhere in the array
// splice(start index, no of elements further)
// splice not only modifies the array but also returns a new array containing the value of the removed elements
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
console.log(arr.splice(1, 3))
console.log(arr.splice(1, 3).reduce((x, y) => x + y)); //if i had to add the elements as well

// Add items using splice()
// using 3rd parameter
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
//Another Example
function htmlColorNames(arr)
{
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond")
    return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// Copy array items using slice(start index, end index) 
function forecast(arr)
{
    let newArr = arr.slice(2, 4); //(will include start but not include end index)
    return newArr;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// Copy an array with spread operator(...)
function copyMachine(arr, num)
{
    let newArr = [];
    while (num >= 1)
    {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));

// Combine arrays with spread operator
function spreadOut()
{
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
}

console.log(spreadOut());

// Check for the presence of an element with indexOf()
// returns the index of the element. If element not there, then it returns -1
function quickCheck(arr, elem)
{
    return arr.indexOf(elem) != -1;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Iterate through all array's items using for loops
function filteredArray(arr, elem)
{
    let newArr = [];
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i].indexOf(elem) == -1)
        {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// Create complex mult-dimensional arrays
// Can have endless deep level in an array.

// Add key-value pairs to JS objects
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
foods.bananas = 13; //dot notation
foods["grapes"] = 35; //square bracket notation
foods.strawberries = 27;
console.log(foods);

// Modify an object nested within an object
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};
userActivity.data.online = 45
console.log(userActivity);

// Access property names with bracket notation
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
function checkInventory(scannedItem)
{
    return foods[scannedItem]
}
console.log(checkInventory("apples"));

// Use delete keyword to remove object property
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
delete foods.oranges; //dot notation
delete foods["plums"]; // square bracket notation
delete foods.strawberries;
console.log(foods);

// Check if an object has properties
// 2 ways to do - 1. hasOwnProperty() method 2. in operator
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};
function isEveryoneHere(userObj)
{
    //The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
        userObj.hasOwnProperty(name))
}
console.log(isEveryoneHere(users));

// Iterate through the keys of an object with a for...in statement
// using the above users
function countOnline(usersObj)
{
    let result = 0
    for (let user in usersObj)
    {
        usersObj[user].online ? result++ : 0
    }
    return result
}
console.log(countOnline(users));

// Generate an array of all object keys with object.keys()
// using the above users
function getArrayOfUsers(obj)
{
    return Object.keys(obj)
}

console.log(getArrayOfUsers(users));

// Modify an array stored in an object
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};
function addFriend(userObj, friend)
{
    userObj["data"].friends.push(friend)
    return userObj["data"].friends
}
console.log(addFriend(user, 'Pete'));