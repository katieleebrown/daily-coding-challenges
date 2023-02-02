// Clean Up After Your Dog
// https://www.codewars.com/kata/57faa6ff9610ce181b000028

function crap(x, bags, cap) {
    let craps = 0
    let dog = false
    x.forEach(row => {
        if (row.includes('D')) {
            dog = true
        }
        row.forEach(y => (y == '@') && craps++)
    })

    return dog ? 'Dog!!' : craps > bags * cap ? 'Cr@p' : 'Clean'
}