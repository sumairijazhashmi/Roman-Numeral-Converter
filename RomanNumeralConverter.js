function convertToRoman(num) {
    let mappings = {"1" : "I", "4" : "IV", "5" : "V", "9" : "IX", "10" : "X", "40" : "XL", "50" : "L", "90" : "XC", "100" : "C", "400" : "CD", "500" : "D", "900" : "CM", "1000" : "M"};
    let numString = num.toString();
    
    // base case: number is exactly equal to a key in mappings
    if(numString in mappings)
    {
        return mappings[numString];
    }
    let result = "";
    if(num < 10)
    {
        result = singleDigit(num, mappings);
    }
    if(num > 10 && num < 100)
    {
        result = doubleDigit(num, mappings);
    }
    if(num > 100 && num < 1000)
    {
        result = tripleDigit(num, mappings);
    }
    if(num > 1000)
    {
        result = fourDigit(num, mappings);
    }
    return result;
}   

function fourDigit(num, mappings)
{
    let result = "";
    while(num > 1000)
    {
        result += mappings["1000"];
        num -= 1000;
    }
    result += tripleDigit(num, mappings);
    return result;
}

function tripleDigit(num, mappings)
{
    // 3 digit
    let result = "";
    if(num < 100)
    {
        result = doubleDigit(num, mappings);
    }
    if(num > 100 && num < 400)
    {
        result = lessThan400(num, mappings);
    }
    if(num > 400 && num < 500)
    {
        result += mappings["400"];
        num = num - 400;
        result = result + doubleDigit(num, mappings);   
    }
    if(num > 500 && num < 900)
    {
        result += mappings["500"];
        num = num - 500;
        result = result + lessThan400(num, mappings);   
    }
    if(num > 900 && num < 1000)
    {
        result += mappings["900"];
        num = num - 900;
        result = result + doubleDigit(num, mappings);
    }
    return result;
}

function doubleDigit(num, mappings)
{
    let result = "";
    // 2 digit
    if(num < 10)
    {
        result = singleDigit(num, mappings);
    }
    if(num > 10 && num < 40)
    {
        result = lessThan40(num, mappings);   
    }
    if(num > 40 && num < 50)
    {
        result += mappings["40"];
        num = num - 40;
        result = result + singleDigit(num, mappings);
    }
    if(num > 50 && num < 90)
    {
        result += mappings["50"];
        num = num - 50;
        result = result + lessThan40(num, mappings);
    }
    if(num > 90 && num < 100)
    {
        result += mappings["90"];
        num = num - 90;
        result = result + singleDigit(num, mappings);
    }
    return result;
}

function lessThan400(num, mappings) {
    let result = "";
    while(num > 100)
    {
        result += mappings["100"];
        num -= 100;
    }
    num = num % 100;
    result = result + doubleDigit(num, mappings);
    return result;
}

function lessThan40(num, mappings) {
    let result = "";
    while(num > 10)
    {
        result += mappings["10"];
        num -= 10;
    }
    num = num % 10;
    result = result + singleDigit(num, mappings);
    return result;
}

function singleDigit(num, mappings)
{
    let numString = num.toString();
    
    // base case: number is exactly equal to a key in mappings
    if(numString in mappings)
    {
        return mappings[numString];
    }
    let result = "";
    // 1 digit
    if(num < 4)
    {
        result = loopCounter(1, num, result, mappings);
    }
    if(num > 5 && num < 9)
    {
        result = mappings["5"];
        result = loopCounter(6, num, result, mappings);
    }
    return result;
}


function loopCounter(startIndex, num, result, mappings)
{
    for(let i=startIndex; i<=num; i++)
    {
        result+=mappings["1"];
    }
    return result;
}

console.log(convertToRoman(3999));