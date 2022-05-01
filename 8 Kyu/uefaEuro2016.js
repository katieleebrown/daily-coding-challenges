// UEFA EURO 2016
// https://www.codewars.com/kata/57613fb1033d766171000d60

function uefaEuro2016(teams, scores) {
    if (scores[0] > scores[1]) {
        return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    } else if (scores[0] < scores[1]) {
        return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    } else {
        return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    }
}