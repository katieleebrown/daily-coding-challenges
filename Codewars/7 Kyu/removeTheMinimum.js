// Remove The Minimum
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
    let ratings = []
    numbers.forEach(x => {
        ratings.push(x)
    })

    let min = Math.min(...ratings)
    let index = ratings.indexOf(min)
    ratings.splice(index, 1)

    return ratings
}