// Build A Tower
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
    let tower = []
    let stars = '*'
    let spaces = ''

    while (spaces.length < (nFloors - 1)) {
        spaces += ' '
    }

    for (let i = 1; i <= nFloors; i++) {
        let row = spaces + stars + spaces

        tower.push(row)

        spaces = spaces.split('')
        spaces.pop()
        spaces = spaces.join('')
        stars += '**'
    }

    return tower
}