// All Star Code Challenge #18
// https://www.codewars.com/kata/5865918c6b569962950002a1

function strCount(str, letter) {
    let list = str.split('')
    let count = 0

    for (let i = 0; i < list.length; i++) {
        if (list[i].toLowerCase() == letter.toLowerCase()) {
            count++
        }
    }

    return count
}