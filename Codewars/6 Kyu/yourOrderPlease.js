// Your Order, Please
// https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words) {
    let arr = words.split(' ')
    let newArr = []

    for (let i = 1; i <= arr.length; i++) {
        let index
        arr.forEach((word, inx) => {
            if (word.includes(i)) {
                index = inx
            }
        })
        newArr.push(arr[index])
    }
    return newArr.join(' ')
}