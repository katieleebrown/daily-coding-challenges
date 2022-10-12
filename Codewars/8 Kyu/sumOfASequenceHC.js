// Sum of a Sequence (Hard-Core Version)
// https://www.codewars.com/kata/587a88a208236efe8500008b

function sequenceSum(begin, end, step) {
    if ((begin > end && step >= 0) || (begin < end && step <= 0)) {
        return 0
    } else if (begin == end) {
        return begin
    } else if (begin < end) {
        let total = 0
        for (let i = begin; i <= end; i += step) {
            total += i
        }
        return total
    } else {
        let total = 0
        for (let i = begin; i >= end; i += step) {
            total += i
        }
        return total
    }
}