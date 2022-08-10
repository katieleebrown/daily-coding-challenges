// Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
    let mumbles = []
    let letters = s.toLowerCase().split('')

    for (let i = 0; i < letters.length; i++) {
        let x = letters[i].toUpperCase()

        if (i > 0) {
            for (let j = 1; j <= i; j++) {
                x += letters[i]
            }
        }
        mumbles.push(x)
    }

    return mumbles.join('-')
}