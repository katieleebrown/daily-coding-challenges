// Gap In Primes
// https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4

function gap(g, m, n) {
    let firstPrime = 0

    for (let i = m; i <= n; i++) {
        if (isPrime(i) && firstPrime == 0) {
            firstPrime = i
        } else if (isPrime(i) && (i - firstPrime == g)) {
            return [firstPrime, i]
        } else if (isPrime(i) && (i - firstPrime != g)) {
            firstPrime = i
        }
    }

    return null
}

function isPrime(x) {
    if (x % 2 == 0 && x > 2) {
        return false
    } else {
        for (let i = 3; i <= Math.sqrt(x); i++) {
            if (x % i == 0) {
                return false
            }
        }
    }

    return true
}