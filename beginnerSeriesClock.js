// Beginner Series #2 Clock
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

function past(h, m, s) {
    return (h * (3.6e+6)) + (m * 60000) + (s * 1000)
}