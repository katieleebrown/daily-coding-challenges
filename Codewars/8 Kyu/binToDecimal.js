// Bin To Decimal
// https://www.codewars.com/kata/57a5c31ce298a7e6b7000334

function binToDec(bin) {
    return bin.split("").reverse().map((x, i) => x * (2 ** i)).reduce((a, b) => Number(a) + Number(b), 0)
}