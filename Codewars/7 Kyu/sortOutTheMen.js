// Sort Out the Men from Boys
// https://www.codewars.com/kata/5af15a37de4c7f223e00012d

function menFromBoys(arr) {
    let evens = arr.filter(x => x % 2 == 0).sort((a, b) => a - b)
    let men = [... new Set(evens)]
    let odds = arr.filter(x => x % 2 != 0).sort((a, b) => b - a)
    let boys = [...new Set(odds)]

    return men.concat(boys)
}