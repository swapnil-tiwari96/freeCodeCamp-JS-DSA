function palindrome(str)
{
    let letters = [];
    let rword = "";
    // put letters of word into stack
    for (let i = 0; i < str.length; i++)
    {
        letters.push(str[i]);
    }
    // pop off the stack in reverse order
    for (let i = 0; i < str.length; i++)
    {
        rword += letters.pop();
    }
    return (str === rword);
}

console.log(palindrome("eye"));