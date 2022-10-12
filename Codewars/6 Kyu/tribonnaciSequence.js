// Tribonnaci Sequence
// https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature, n) {
    if (n == 0) {
        return []
    } else if (n == 1) {
        return [signature[0]]
    } else if (n == 2) {
        return [signature[0], signature[1]]
    } else {
        for (let i = 4; i <= n; i++) {
            let sum = (signature[signature.length - 1] + signature[signature.length - 2] + signature[signature.length - 3])
            signature.push(sum)
        }
        return signature
    }
}