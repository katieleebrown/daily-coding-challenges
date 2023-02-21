// NBA Full 48 Minutes Average
// https://www.codewars.com/kata/587c2d08bb65b5e8040004fd/

function pointsPer48(ppg, mpg) {
    return mpg == 0 ? 0 : +((ppg / mpg) * 48).toFixed(1)
}