// Name Shuffler
// https://www.codewars.com/kata/559ac78160f0be07c200005a

function nameShuffler(str) {
    let newArr = str.split(' ')
    let firstName = newArr[0]
    let lastName = newArr[1]

    return `${lastName} ${firstName}`
}