// Credit Card Mask
// https://www.codewars.com/kata/5412509bd436bd33920011bc

// return masked string
function maskify(cc) {
    let arr = cc.split('')
    for (let i = 0; i < arr.length - 4; i++) {
        arr[i] = '#'
    }
    return arr.join('')
}