// Simple Beads Count
// https://www.codewars.com/kata/58712dfa5c538b6fc7000569

function countRedBeads(n) {
    return n < 2 ? 0 : (n - 1) * 2
}