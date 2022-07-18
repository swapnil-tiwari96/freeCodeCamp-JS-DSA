//1. if..else with for loop implementation
function sumAll(arr)
{
    let total = 0
    if (arr[0] < arr[1])
    {

        for (let i = arr[0]; i <= arr[1]; i++)
        {
            total += i;
        }
        return total;
    } else
    {
        for (let i = arr[0]; i >= arr[1]; i--)
        {
            total += i;
        }
        return total;
    }
}
console.log(sumAll([4, 1]));

// 2. max-min with for loop implementation
function sumAll(arr)
{
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1])
    let total = 0
    for (let i = min; i <= max; i++)
    {
        total += i;
    }
    return total;
}


console.log(sumAll([4, 1]));
