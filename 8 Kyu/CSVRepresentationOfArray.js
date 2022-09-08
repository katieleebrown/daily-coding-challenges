// CSV Representation of an Array
// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

function toCsvText(array) {
    return array.map(item => item.join(',')).join('\n')
}