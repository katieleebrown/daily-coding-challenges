// Sum of Pairs
// https://www.codewars.com/kata/54d81488b981293527000c8f

function sumPairs(ints, s) {
    const set = new Set()

    for (let i = 0; i < ints.length; i++) {
        if (set.has(s - ints[i])) {
            return [s - ints[i], ints[i]]
        }
        set.add(ints[i])
    }
    return undefined
}