// Beginner - Reduce but Grow
// https://www.codewars.com/kata/57f780909f7e8e3183000078/solutions/javascript

function grow(x) {
    let product = 1
    for (let i = 0; i < x.length; i++) {
        product *= x[i]
    }
    return product
}
