// if only for strings with no gaps
function palindrome(str)
{
    let rstr = str.split("").reverse().join("");
    return (str === rstr);
}
console.log(palindrome("eye"));

//using stack
function palindrome(str)
{
    let letters = [];
    let rword = "";
    // put letters of word into stack
    for (let i = 0; i < str.length; i++)
    {
        letters.push(str[i]);
    }
    for (let i = 0; i < str.length; i++)
    {
        rword += letters.pop();
    }
    return (str === rword);
}

console.log(palindrome("eye"));