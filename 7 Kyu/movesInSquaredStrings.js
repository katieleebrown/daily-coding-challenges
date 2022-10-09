// Moves in Squared Strings
// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25

function vertMirror(strng) {
    let arr = strng.split('\n')
    arr = arr.map(x => x.split('').reverse().join(''))
    return arr.join('\n')
}
function horMirror(strng) {
    let arr = strng.split('\n')
    return arr.reverse().join('\n')
}
function oper(fct, s) {
  return fct == vertMirror ? vertMirror(s) : horMirror(s)
}