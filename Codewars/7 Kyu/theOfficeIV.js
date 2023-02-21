// The Office IV - Find a Meeting Room
// https://www.codewars.com/kata/57f604a21bd4fe771b00009c/

function meeting(x) {
    return x.includes('O') ? x.indexOf('O') : 'None available!'
}