// Maximum Length Difference
// https://www.codewars.com/kata/5663f5305102699bad000056

function mxdiflg(a1, a2) {
    if (a1.length == 0 || a2.length == 0) {
        return -1
    }
    a1 = a1.sort((a, b) => a.length - b.length)
    let aMax = a1[0].length
    let aMin = a1[a1.length - 1].length

    a2 = a2.sort((a, b) => a.length - b.length)
    let bMax = a2[0].length
    let bMin = a2[a2.length - 1].length

    return Math.abs(aMax - bMin) > Math.abs(bMax - aMin) ? Math.abs(aMax - bMin) : Math.abs(bMax - aMin)
}