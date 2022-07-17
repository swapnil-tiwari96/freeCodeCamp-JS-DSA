/*
Functional programming is about:
    Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
    Pure functions - the same input always gives the same output
    Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled
*/

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';
/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) =>
{
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1)
    {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};
const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC)


// // Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea1 = (prepareTea, numOfCups) =>
{
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1)
    {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};
const tea4GreenTeamFCC = getTea1(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea1(prepareBlackTea, 13);
console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
);

// Understand the Hazards of Using Imperative Code
// Avoid Mutations and Side Effects Using Functional Programming
// Pass Arguments to Avoid External Dependence in a Function

// Refactor global variables out of the function
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
/* This function should add a book to the list and return the list */
// New parameters should come before bookName
function add(list, bookName)
{
    return [...list, bookName];
}
/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one
function remove(list, bookName)
{
    return list.filter(book => book !== bookName);
}
var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

/* Use the map Method to Extract Data from an Array - The map method iterates over each item in an array and returns a new array 
containing the results of calling the callback function on each element. It does this without mutating the original array.
*/
// Map is a pure function and it solely depends on it's input. 
const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({ title, rating }));

// Implementing map() using forEach()
// the global Array
var s = [23, 65, 98, 5];
Array.prototype.myMap = function (callback)
{
    var newArray = [];
    this.forEach(a => newArray.push(callback(a)));
    return newArray;
};
var new_s = s.myMap(function (item)
{
    return item * 2;
});

// .filter()
const filteredList = watchList
    .filter(({ imdbRating }) => imdbRating >= 8.0)
    .map(({ Title: title, imdbRating: rating }) => ({ title, rating }));

// Implementing .filter using forEach()
let s = [23, 65, 98, 5];
Array.prototype.myFilter = function (callback)
{
    // Only change code below this line
    let newArray = [];
    this.forEach(function (x) 
    {
        if (callback(x) == true)
        {
            newArray.push(x);
        }
    });
    // Only change code above this line
    return newArray;
};

let new_s = s.myFilter(function (item)
{
    return item % 2 === 1;
});

// In functional programming, it's better to use things which don't mutate the array.
// Slice doesn't mutate the array. But splice does.
// Concat doesn't mutate the array. But push does.

// Use reduce method to analyze data
function getRating(watchList)
{
    const averageRating = watchList
        // Use filter to find films directed by Christopher Nolan
        .filter(film => film.Director === "Christopher Nolan")
        // Use map to convert their ratings from strings to numbers
        .map(film => Number(film.imdbRating))
        // Use reduce to add together their ratings
        .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
        // Divide by the number of Nolan films to get the average rating
        watchList.filter(film => film.Director === "Christopher Nolan").length;
    return averageRating;
}

// sort an alphabetically using the sort method - it sorts the elements of an array according to the callback function
function ascendingOrder(arr)
{
    return arr.sort(function (a, b)
    {
        return a - b;
    });
}
ascendingOrder([1, 5, 2, 3, 4]);
// This would return the value [1, 2, 3, 4, 5]

function reverseAlpha(arr)
{
    return arr.sort(function (a, b)
    {
        return a === b ? 0 : a < b ? 1 : -1;
    });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);