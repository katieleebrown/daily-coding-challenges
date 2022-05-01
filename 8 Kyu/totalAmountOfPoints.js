// Total Amount of Points
// https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
    let points = 0
    games.forEach(match => {
        let scores = match.split(':')
        if (scores[0] > scores[1]) {
            points += 3
        } else if (scores[0] == scores[1]) {
            points += 1
        }
    })
    return points
}