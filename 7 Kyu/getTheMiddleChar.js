// Get the Middle Character
// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {
    if (s.length % 2 !== 0) {
        return s.charAt(Math.floor(s.length / 2))
    } else {
        return s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2)
    }
}