// Nth Power
// https://www.codewars.com/kata/57d814e4950d8489720008db

function index(array, n) {
    return (array.length - 1 < n) ? - 1 : (array[n] ** n)
}