// Thinkful Number Drills
// https://www.codewars.com/kata/5862f663b4e9d6f12b00003b

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let totalRemaining = (blueStart - bluePulled) + (redStart - redPulled)

    return (blueStart - bluePulled) / totalRemaining
}