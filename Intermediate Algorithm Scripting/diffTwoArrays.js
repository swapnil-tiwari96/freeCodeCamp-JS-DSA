function diffArray(arr1, arr2)
{
    return [...arr1.filter(x => !arr2.includes(x)), ...arr2.filter(x => !arr1.includes(x))]
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));