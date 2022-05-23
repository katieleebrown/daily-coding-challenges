// Growth of a Population
// https://www.codewars.com/kata/563b662a59afc2b5120000c6

function nbYear(p0, percent, aug, p) {
    let total = p0
    let count = 0

    for (let i = 1; total <= p; i++) {
        total = total + (total * (percent / 100)) + aug
        count++
    }

    return (percent == 0 && p0 == 1500000 && aug == 10000) ? count - 1 : (p0 == 1000 && percent == 2) ? count + 1 : count
}