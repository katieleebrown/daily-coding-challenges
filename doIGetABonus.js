// Do I Get a Bonus?
// https://www.codewars.com/kata/56f6ad906b88de513f000d96

function bonusTime(salary, bonus) {
    let total = bonus ? salary * 10 : salary * 1
    return `£${total}`
}