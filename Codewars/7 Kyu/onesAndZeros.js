// Ones and Zeros
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = arr => {
    let twos = arr.map((x, i, l) => x * (2 ** (l.length - 1 - i)))

    return twos.reduce((a, b) => a + b, 0)
};