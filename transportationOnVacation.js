// Transportation on Vacation
// https://www.codewars.com/kata/568d0dd208ee69389d000016


function rentalCarCost(d) {
    if (d < 3) {
        return (d * 40)
    } else if (d >= 3 && d < 7) {
        return ((d * 40) - 20)
    } else if (d >= 7) {
        return ((d * 40) - 50)
    }
}