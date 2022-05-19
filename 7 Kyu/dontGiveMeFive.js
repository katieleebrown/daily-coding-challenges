// Don't Give Me Five
// https://www.codewars.com/kata/5813d19765d81c592200001a

function dontGiveMeFive(start, end) {
    let arr = []
    for (let i = start; i <= end; i++) {
        let str = i.toString().split('')

        if (!str.includes('5')) {
            arr.push(i)
        }
    }
    return arr.length
}