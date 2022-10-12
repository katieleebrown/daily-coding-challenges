// Abbreviate a Two Word Name
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name) {
    let newName = name.toUpperCase()
    let words = newName.split(' ')

    words.forEach((item, index) => {
        words.splice(index, 1, item.charAt(0))
    })

    return words.join('.')
}