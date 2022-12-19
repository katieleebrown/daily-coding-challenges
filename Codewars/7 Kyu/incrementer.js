// Incrementer
// https://www.codewars.com/kata/590e03aef55cab099a0002e8

function incrementer(nums) {
    return nums.map((x, i) => {
        let newNum = x + i + 1

        while (newNum > 10) {
            newNum -= 10
        }

        if (newNum == 10) {
            newNum = +0
        }

        return newNum
    })
}