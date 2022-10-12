// Find the Odd Int
// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
    let nums = [...new Set(A)]

    for (let i = 0; i < nums.length; i++) {
        let filters = A.filter(x => x == nums[i])

        if (filters.length % 2 !== 0) {
            return nums[i]
        }
    }
}