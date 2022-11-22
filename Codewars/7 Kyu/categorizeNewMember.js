// Categorize New Member
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data) {
    return data.map(arr => {
        if (arr[0] > 54 && arr[1] > 7) {
            return 'Senior'
        } else {
            return 'Open'
        }
    })
}