// Sorted? Yes? No? How? 
// https://www.codewars.com/kata/580a4734d6df748060000045

function isSortedAndHow(array) {
    let ascending = []
    let descending = []

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            ascending.push(true)
        } else if (array[i] < array[i - 1]) {
            descending.push(true)
        }
    }

    return ascending.length == 0 ? 'yes, descending' : descending.length == 0 ? 'yes, ascending' : 'no'
}