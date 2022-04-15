// Reversed Sequence
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = n => {
    let newArr = []
    for (let i = n; i >= 1; i--) {
        newArr.push(i)
    }

    return newArr
};