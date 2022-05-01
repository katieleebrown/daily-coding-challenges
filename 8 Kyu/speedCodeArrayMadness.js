// Speed Code #2 - Array Madness
// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1

function arrayMadness(a, b) {
    let squares = a.map(x => x * x)
    let cubes = b.map(x => x * x * x)

    return (squares.reduce((prev, current) => prev + current, 0)) > (cubes.reduce((prev, current) => prev + current, 0)) ? true : false
}