// Training JS # 18
// https://www.codewars.com/kata/57280481e8118511f7000ffa/

function splitAndMerge(string, separator) {
    let words = string.split(' ')
    words = words.map(word => word.split('').join(`${separator}`))

    return words.join(' ')
}