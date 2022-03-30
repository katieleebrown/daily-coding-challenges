// How Good Are You Really?
// https://www.codewars.com/kata/5601409514fc93442500010b

function betterThanAverage(classPoints, yourPoints) {
    let average = (classPoints.reduce((a, b) => a + b, 0) + yourPoints) / (classPoints.length + 1)

    let results = yourPoints > average ? true : false

    return results
}