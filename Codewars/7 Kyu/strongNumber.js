// Strong Number
// https://www.codewars.com/kata/5a4d303f880385399b000001

function strong(n) {
    let nums = []
    let list = n.toString().split('')

    for (let i = 0; i < list.length; i++) {
        nums.push(factorial(Number(list[i])))
    }

    let facSum = nums.reduce((a, b) => a + b, 0)

    return facSum == n ? "STRONG!!!!" : "Not Strong !!";
}

function factorial(num) {
    let result = num

    if (num == 0 || num == 1) {
        return 1
    }

    while (num > 1) {
        num--
        result *= num
    }

    return result
}