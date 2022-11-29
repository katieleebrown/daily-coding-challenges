// Exclamation Mark Series #1: Remove and Exclamation Mark from the End of a String
// https://www.codewars.com/kata/57fae964d80daa229d000126

function remove(string) {
    if (string.endsWith('!')) {
        string = string.slice(0, -1)
    }
    return string
}