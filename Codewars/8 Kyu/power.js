// Power
// https://www.codewars.com/kata/562926c855ca9fdc4800005b/

function numberToPower(number, power) {
    let solution = number

    for (let i = 1; i < power; i++) {
        solution *= number
    }

    return power == 0 ? 1 : solution
}

// This kata required finding a solution without using Math.pow, Math functions, eval(), or **.