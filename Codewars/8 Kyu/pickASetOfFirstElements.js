// Pick a Set of First Elements
// https://www.codewars.com/kata/572b77262bedd351e9000076/

function first(arr, n) {
    return n == 0 ? [] : typeof n != 'number' ? arr.slice(0, 1) : arr.slice(0, n)
}