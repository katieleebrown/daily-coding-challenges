// Maximum Triplet Sum
// https://www.codewars.com/kata/5aa1bcda373c2eb596000112

function maxTriSum(numbers) {
    let uniques = [...new Set(numbers)]
    uniques.sort((a, b) => a - b)

    return uniques[uniques.length - 1] + uniques[uniques.length - 2] + uniques[uniques.length - 3]
}