function convertToF(celsius)
{
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

function convertToC(fahrenheit)
{
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
console.log(convertToF(30));
console.log(convertToC(86));
