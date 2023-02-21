// Digits Explosion
// https://www.codewars.com/kata/585b1fafe08bae9988000314/

function explode(s) {
    let str = ''
    s = s.split('')

    for (let i = 0; i < s.length; i++) {
        str += s[i].repeat(s[i])
    }

    return str
}