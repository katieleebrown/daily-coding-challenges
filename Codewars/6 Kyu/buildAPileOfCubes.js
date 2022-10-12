// Build a Pile of Cubes
// https://www.codewars.com/kata/5592e3bd57b64d00f3000047

function findNb(m) {
    let n = 0
    let total = m
    
    while (total > 0) {
      n++
      total -= (n**3)
    }

    return total == 0 ? n : -1
}