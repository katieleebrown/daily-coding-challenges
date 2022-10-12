// Sum of a Sequence
// https://www.codewars.com/kata/586f6741c66d18c22800010a

const sequenceSum = (begin, end, step) => {
    let nums = []
    let count = begin

    while (count <= end) {
        nums.push(count)
        count += step
    }

    return begin > end ? 0 : nums.reduce((a, b) => a + b, 0)
};