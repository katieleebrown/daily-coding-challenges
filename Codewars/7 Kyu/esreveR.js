// esreveR
// https://www.codewars.com/kata/5413759479ba273f8100003d

reverse = function (array) {
    let newArr = []

    while (array.length > 0) {
        let x = array.pop()
        newArr.push(x)
    }

    return newArr
}