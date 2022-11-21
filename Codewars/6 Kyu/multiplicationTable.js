// Multiplication Table
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

multiplicationTable = function (size) {
    let table = []

    for (let i = 1; i <= size; i++) {
        let line = []

        for (let j = 1; j <= size; j++) {
            line.push(j * i)
        }

        table.push(line)
    }

    return table
}