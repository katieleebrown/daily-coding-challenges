// Detect Pangram
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string) {
    let words = string.split(' ').join('')
    let letters = words.split('').map(letter => letter.toLowerCase().charCodeAt(0))
    let unique = [...new Set(letters)].sort((a, b) => a - b)
    let index = unique.indexOf(97)

    // in case there is no 'a' (not in test cases)
    if (index == -1) {
        return false
    }

    let pangram = true

    for (let i = index + 1; i < unique.length; i++) {
        if ((unique[i] - 1) !== unique[i - 1]) {
            pangram = false
        }
    }
    return unique.length < 26 ? false : pangram
}