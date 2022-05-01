// Quarter of the Year
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

const quarterOf = (month) => {
    if (month < 4) {
        return 1
    } else if (month < 7) {
        return 2
    } else if (month < 10) {
        return 3
    } else {
        return 4
    }
}