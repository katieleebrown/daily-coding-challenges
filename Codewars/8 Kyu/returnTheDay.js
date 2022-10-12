// Return The Day
// https://www.codewars.com/kata/59dd3ccdded72fc78b000b25

function whatday(num) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return (num > 0 && num < 8) ? days[num - 1] : 'Wrong, please enter a number between 1 and 7'
}