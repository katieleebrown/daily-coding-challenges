// String Transformer
// https://www.codewars.com/kata/5878520d52628a092f0002d0

function stringTransformer(str) {
    let chars = str.split(' ').reverse().join(' ').split('')

    let changed = chars.map(x => {
        if (x == x.toUpperCase()) {
            return x.toLowerCase()
        } else if (x == x.toLowerCase()) {
            return x.toUpperCase()
        } else {
            return x
        }
    })

    return changed.join('')
}