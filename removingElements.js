// Removing Elements
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

function removeEveryOther(arr) {
    return arr.filter((element, index) => index % 2 === 0)
}