// using endsWith()
function confirmEnding(str, target)
{
    return str.endsWith(target);
}
console.log(confirmEnding("Bastian", "n"));
//the opposite of endsWith is startsWith

// using substring method
function confirmEnding(str, target)
{
    return str.substring(str.length - target.length) == target ? true : false;
}
console.log(confirmEnding("Bastian", "n"));