// Powers of 2
// https://www.codewars.com/kata/57a083a57cb1f31db7000028

function powersOfTwo(n) {
    let array = []
    for (let i = 0; i <= n; i++) {
        array.push(2 ** i)
    }

    return array
}