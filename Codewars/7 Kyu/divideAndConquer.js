// Divide and Conquer
// https://www.codewars.com/kata/57eaec5608fed543d6000021

function divCon(x) {
    let nums = x.filter(x => typeof x == 'number').reduce((a, b) => a + b, 0)
    let strings = x.filter(x => typeof x == 'string').map(x => Number(x)).reduce((a, b) => a + b, 0)

    return nums - strings
}