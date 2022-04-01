// Duck Duck Goose
// https://www.codewars.com/kata/582e0e592029ea10530009ce

function duckDuckGoose(players, goose) {
    let n = goose % players.length

    return n > 0 ? players[n - 1].name : players[players.length - 1].name
}