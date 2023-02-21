// Automorphic Number
// https://www.codewars.com/kata/5a58d889880385c2f40000aa

function automorphic(n) {
    let x = n.toString().split('')
    let y = (n * n).toString().split('')
    let automorphic = true

    for (let i = 0; i < x.length; i++) {
        if (y[y.length - i - 1] != x[x.length - i - 1]) {
            automorphic = false
        }
    }

    return automorphic ? "Automorphic" : "Not!!"
}