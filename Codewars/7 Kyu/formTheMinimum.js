// Form The Minimum
// https://www.codewars.com/kata/5ac6932b2f317b96980000ca

function minValue(values) {
    let nums = []

    for (let i = 0; i < values.length; i++) {
        if (!nums.includes(values[i])) {
            nums.push(values[i])
        }
    }

    return Number(nums.sort((a, b) => a - b).join(''))
}