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

