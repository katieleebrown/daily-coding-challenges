// Perfect Squares, Perfect Fun
// https://www.codewars.com/kata/5705ca6a41e5be67720012c0/

function squareIt(int) {
    let length = int.toString().length

    if (Math.ceil(Math.sqrt(length)) == Math.floor(Math.sqrt(length))) {
        let sqrt = Math.sqrt(length)
        let numsList = int.toString().split('')

        for (let i = sqrt + 1; i < numsList.length; i += sqrt + 1) {
            numsList.splice(i - 1, 0, '\n')
        }
        return numsList.join('')
    } else {
        return "Not a perfect square!"
    }
}