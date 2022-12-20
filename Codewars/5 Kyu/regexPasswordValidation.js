// Regex Password Validation
// https://www.codewars.com/kata/52e1476c8147a7547a000811

const REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9]{6,}$/;

function validate(password) {
    return REGEXP.test(password)
}