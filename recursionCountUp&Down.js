function countup(n)
{
    return n < 1 ? [] : [...countup(n - 1), n]
}
console.log(countup(5));

function countdown(n)
{
    return n < 1 ? [] : [n, ...countdown(n - 1)];
}