// Evil or Odious
// https://www.codewars.com/kata/56fcfad9c7e1fa2472000034

function evil(n) {
    let binary = n.toString(2)
    let ones = binary.split('').filter(x => x == 1)
    return ones.length % 2 == 0 ? `It's Evil!` : `It's Odious!`
}