// Check Same Case
// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b

function sameCase(a, b) {
    let aCode = a.charCodeAt(0)
    let bCode = b.charCodeAt(0)
    let aCase = checkCase(aCode)
    let bCase = checkCase(bCode)

    return aCase == null || bCase == null ? -1 : aCase == bCase ? 1 : 0

}

function checkCase(x) {
    if (x > 64 && x < 91) {
        return 'upper'
    } else if (x > 96 && x < 123) {
        return 'lower'
    } else {
        return null
    }
}