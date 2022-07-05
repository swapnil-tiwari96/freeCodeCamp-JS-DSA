function truncateString(str, num)
{
    let result = num < str.length ? str.slice(0, num) + "..." : str;
    return result;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));