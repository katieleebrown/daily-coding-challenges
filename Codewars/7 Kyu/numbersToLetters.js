// Numbers to Letters
// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c

function switcher(x) {
    let letters = ['', 'z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a', '!', '?', ' ']
    let mapped = x.map(num => letters[num])

    return mapped.join('')
}