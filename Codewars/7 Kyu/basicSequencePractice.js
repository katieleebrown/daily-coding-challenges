// Basic Sequence Practice
// https://www.codewars.com/kata/5436f26c4e3d6c40e5000282/

function sumOfN(n) {
    let count = [0]
    let nums = []

    if (n > 0) {
        for (let i = 0; i <= n; i++) {
            nums.push(count.reduce((a, b) => a + b, 0))
            count.push(count[count.length - 1] + 1)
        }
    } else if (n < 0) {
        for (let i = 0; i >= n; i--) {
            nums.push(count.reduce((a, b) => a + b, 0))
            count.push(count[count.length - 1] - 1)
        }
    } else {
        return [0]
    }

    return nums
};