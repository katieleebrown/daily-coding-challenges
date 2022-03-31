// Remove First and Last Character
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar(str) {
    let newArr = str.split('')
    let lastLetter = newArr.pop()
    let firstLetter = newArr.shift()
    newArr = newArr.join('')
    return newArr
};
