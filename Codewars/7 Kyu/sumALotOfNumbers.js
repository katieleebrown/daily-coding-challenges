// Sum a Lot of Numbers
// https://www.codewars.com/kata/54df2067ecaa226eca000229

function f(n) {
    return (typeof n == 'number' && n % 1 == 0 && n > 0) ? ((n * (n + 1)) / 2) : false
};