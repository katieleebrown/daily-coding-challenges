// Exclamation Mark Series No 4: Remove all exclamation marks from a sentence but ensure exclamation at the end
// https://www.codewars.com/kata/57faf12b21c84b5ba30001b0

function remove(string) {
    string = string.replace(/['!']/gi, '')
    return string.concat('!')
}