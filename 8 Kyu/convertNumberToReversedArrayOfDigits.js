// Convert Number to Reversed Array of Digits
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

function digitize(n) {
    let newArr = String(n).split("").reverse().map((num) => {
        return Number(num)
    })
    return newArr
}