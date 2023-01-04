// Multiplication Table for Number
// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

function multiTable(number) {
    let table = []

    for (let i = 1; i < 11; i++) {
        table.push(`${i} * ${number} = ${i * number}`)
    }

    return table.join('\n')
}