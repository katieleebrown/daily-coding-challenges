// Convert to Camel Case
// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
    let arr = []

    if (str.includes('-')) {
        let dashes = str.split('-')
        for (let i = 0; i < dashes.length; i++) {
            arr.push(dashes[i])
        }
    } else if (str.includes('_')) {
        let underscores = str.split('_')
        for (let i = 0; i < underscores.length; i++) {
            arr.push(underscores[i])
        }
    } else {
        arr.push(str)
    }

    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }

    return arr.join('')
}