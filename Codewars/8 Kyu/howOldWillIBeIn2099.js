// How Old Will I Be in 2099?
// https://www.codewars.com/kata/5761a717780f8950ce001473

function calculateAge(a, b) {
    if (b - a > 1) {
        return `You are ${b - a} years old.`
    } else if (b - a == 0) {
        return 'You were born this very year!'
    } else if (b - a == 1) {
        return 'You are 1 year old.'
    } else if (b - a == -1) {
        return 'You will be born in 1 year.'
    } else {
        return `You will be born in ${Math.abs(b - a)} years.`
    }
}