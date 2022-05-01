// Remove First and Last Character Part 2
// https://www.codewars.com/kata/570597e258b58f6edc00230d

function array(arr) {
    arr = arr.split(',')

    let first = arr.pop()
    let last = arr.shift()

    return arr.join(' ') === '' ? null : arr.join(' ')
}