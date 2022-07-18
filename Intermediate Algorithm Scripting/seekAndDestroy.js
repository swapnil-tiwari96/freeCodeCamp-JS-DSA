function destroyer(arr, ...valsToRemove)
{
    return arr.filter(elem => !valsToRemove.includes(elem));
}