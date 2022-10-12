// Well of Ideas - Easy Version
// https://www.codewars.com/kata/57f222ce69e09c3630000212

function well(x) {
    let numOfIdeas = 0
    x.forEach(element => {
        if (element === 'good') {
            numOfIdeas++
        }
    })

    if (numOfIdeas === 0) {
        return 'Fail!'
    } else if (numOfIdeas === 1 || numOfIdeas === 2) {
        return 'Publish!'
    } else {
        return 'I smell a series!'
    }
}