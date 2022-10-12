// Freuidian Translator
// https://www.codewars.com/kata/5713bc89c82eff33c60009f7

function toFreud(string) {
    return string === '' ? '' : string.split(' ').map(x => 'sex').join(' ')
}