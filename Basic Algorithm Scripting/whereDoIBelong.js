function getIndexToIns(arr, num)
{
    return arr.concat(num).sort((a, b) => a - b).indexOf(num)
}
console.log(getIndexToIns([40, 60], 50));
