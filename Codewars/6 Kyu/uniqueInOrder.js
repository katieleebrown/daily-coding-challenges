// Unique in Order
// https://www.codewars.com/kata/54e6533c92449cc251001667

var uniqueInOrder = function (iterable) {
    let list = []
    if (iterable == []) {
        list = []
    } else if (Array.isArray(iterable) && iterable.length >= 1) {
        list = pushUnique(iterable)
    } else if (typeof iterable == 'string') {
        let arr = iterable.split('')
        list = pushUnique(arr)
    } else {
        list = []
    }

    return list == undefined ? [] : list
}

function pushUnique(array) {
    let newList = []

    newList.push(array[0])

    for (let i = 1; i < array.length; i++) {
        if (newList[newList.length - 1] !== array[i]) {
            newList.push(array[i])
        }
    }

    return newList
}