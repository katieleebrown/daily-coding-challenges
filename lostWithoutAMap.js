// Beginner - Lost Without A Map
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/javascript

function maps(x) {
    let newArr = []
    for (let i = 0; i < x.length; i++) {
        newArr.push(x[i] * 2)
    }
    return newArr
}