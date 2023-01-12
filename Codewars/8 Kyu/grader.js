// Grader
// https://www.codewars.com/kata/53d16bd82578b1fb5b00128c/

function grader(score) {
    return score < .6 ? 'F' : score < .7 ? 'D' : score < .8 ? 'C' : score < .9 ? 'B' : score > 1 ? 'F' : 'A'
}