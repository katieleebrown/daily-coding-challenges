// Parts of a List
// https://www.codewars.com/kata/56f3a1e899b386da78000732

function partlist(arr) {
    let options = []

    for (let i = 0; i < arr.length - 1; i++) {
        let one = []
        let two = []

        for (let j = 0; j < arr.length; j++) {
            if (j <= i) {
                one.push(arr[j])
            } else {
                two.push(arr[j])
            }
        }
        one = one.join(' ')
        two = two.join(' ')

        options.push([one, two])
    }

    return options
}