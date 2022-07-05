// using .repeat()
function repeatStringNumTimes(str, num)
{
    let result = num > 0 ? str.repeat(num) : "";
    return result
}

console.log(repeatStringNumTimes("abc", 3));

// using for loops
function repeatStringNumTimes(str, num)
{
    let result = ""
    for (let i = 0; i < num; i++)
    {
        result += str
    }
    return result
}

console.log(repeatStringNumTimes("abc", 3));

// using recursion
function repeatStringNumTimes(str, num)
{
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}