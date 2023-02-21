// Jumping Number
// https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed/

function jumpingNumber(n) {
    if (n < 11) {
        return 'Jumping!!'
    }

    let nums = n.toString().split('').map(x => Number(x))
    for (let i = 1; i < nums.length; i++) {
        if ((nums[i - 1] + 1 != nums[i]) && (nums[i - 1] - 1 != nums[i])) {
            return 'Not!!'
        }
    }

    return 'Jumping!!'
}