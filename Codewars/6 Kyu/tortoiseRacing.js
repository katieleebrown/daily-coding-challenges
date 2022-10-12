// Tortoise Racing
// https://www.codewars.com/kata/55e2adece53b4cdcb900006c/

function race(v1, v2, g) {
    let secondsTime = (g / (v2 - v1)) * 3600

    let seconds = secondsTime % 60

    let minutesTime = (secondsTime - seconds) / 60
    let minutes = minutesTime % 60

    let hours = (minutesTime - minutes) / 60

    return v2 < v1 ? null : [hours, minutes, parseInt(seconds, 10)]
}