// Row Weights
// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

function rowWeights(array) {
    let teamOne = 0
    let teamTwo = 0

    for (let i = 0; i < array.length; i++) {
        if ((i + 1) % 2 === 0) {
            teamTwo += array[i]
        } else {
            teamOne += array[i]
        }
    }
    return [teamOne, teamTwo]
}