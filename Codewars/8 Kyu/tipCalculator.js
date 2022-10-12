// Tip Calculator
// https://www.codewars.com/kata/56598d8076ee7a0759000087

function calculateTip(amount, rating) {
    switch (rating.toLowerCase()) {
        case ('terrible'):
            return 0
            break
        case ('poor'):
            return Math.ceil(amount * .05)
            break
        case ('good'):
            return Math.ceil(amount * .1)
            break
        case ('great'):
            return Math.ceil(amount * .15)
            break
        case ('excellent'):
            return Math.ceil(amount * .2)
            break
        default:
            return 'Rating not recognised'
            break
    }
}