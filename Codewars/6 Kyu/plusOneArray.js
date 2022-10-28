// Plus One Array
// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9

function upArray(arr) {
    let lastNum = arr[arr.length - 1]
    let hasNegative = arr.some(v => v < 0)
    let hasDoubleDigits = arr.some(x => x.toString().length > 1)

    if (lastNum > 9 || lastNum < 0 || arr.length == 0 || hasNegative || hasDoubleDigits) {
        return null
    } else if (lastNum !== 9) {
        arr[arr.length - 1]++

        return arr
    } else {
        let index = -1

        for (let i = arr.length - 1; i > 0; i--) {
            if (arr[i] != 9 && index == -1) {
                index = i
                i = 0
            }
        }

        if (index == -1) {
            arr.unshift(1)
            arr = arr.map(x => x == 9 ? 0 : x)
            return arr
        } else {
            let increaseNum = arr[index]

            arr[index] = increaseNum + 1

            for (let i = index + 1; i < arr.length; i++) {
                arr[i] = 0
            }

            return arr
        }
    }
}