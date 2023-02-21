// Squares Sequence
// https://www.codewars.com/kata/5546180ca783b6d2d5000062

function squares(x, n) {
    let arr = [x]

    for (let i = 1; i < n; i++) {
        arr.push(arr[arr.length - 1] ** 2)
    }

    return n <= 0 ? [] : arr
}