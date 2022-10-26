// Dashitize It
// https://www.codewars.com/kata/58223370aef9fc03fd000071

function dashatize(num) {
    if (typeof num != "number" || isNaN(num)) {
        return 'NaN'
    }

    let arr = Math.abs(num).toString().split('')
    arr = arr.map(x => x % 2 == 0 ? x : `-${x}-`)

    arr = arr.join('').split('')

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '-' && arr[i + 1] == '-') {
            arr.splice(i, 1)
            i--
        }
    }

    arr = arr.join('')

    if (arr.charAt(0) == '-') {
        arr = arr.substring(1)
    }

    if (arr.charAt(arr.length - 1) == '-') {
        arr = arr.substring(0, arr.length - 1)
    }

    return arr
}