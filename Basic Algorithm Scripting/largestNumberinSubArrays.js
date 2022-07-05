//basic way
function largestOfFour(arr)
{
    const results = [];
    for (let i = 0; i < arr.length; i++)
    {
        let largestNumber = arr[i][0];
        for (let j = 1; j < arr[i].length; j++)
        {
            if (arr[i][j] > largestNumber)
            {
                largestNumber = arr[i][j];
            }
        }
        results[i] = largestNumber;
    }

    return results;
}

// with ascending order
let newArr = []
function largestOfFour(arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        newArr.push(Math.max(...arr[i]));
    }
    return newArr
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));