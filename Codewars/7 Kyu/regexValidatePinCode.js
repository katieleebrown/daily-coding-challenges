// Regex Validate Pin Code
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

function validatePIN(pin) {
    if (pin.length > 6 || pin.length < 4 || pin.length == 5) {
        return false
    } else if (Number(pin) % 1 != 0) {
        return false
    } else if (pin.replace(/[0-9]/g, '').length > 0) {
        return false
    }
    return true
}