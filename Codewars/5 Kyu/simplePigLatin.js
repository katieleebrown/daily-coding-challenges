// Simple Pig Latin
// https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str) {
    let arr = str.split(' ')
    let newArr = []

    arr.map(word => {
        let letters = word.split('')
        let first = letters.shift()

        if (first == '!' || first == '?') {
            console.log('! or ?')
            letters.push(first)
        } else {
            letters.push(`${first}ay`)
        }

        newArr.push(letters.join(''))
    })

    return newArr.join(' ')
}