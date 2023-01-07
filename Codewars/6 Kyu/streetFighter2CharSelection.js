// Street Fighter 2 - Character Selection
// https://www.codewars.com/kata/5853213063adbd1b9b0000be

function streetFighterSelection(fighters, position, moves) {
    let horizontal = position[1]
    let vertical = position[0]
    let selectionList = []

    for (let i = 0; i < moves.length; i++) {
        let dir = moves[i]

        switch (dir) {
            case 'up':
                if (vertical == 1) {
                    vertical--
                }
                break
            case 'down':
                if (vertical == 0) {
                    vertical++
                }
                break
            case 'left':
                if (horizontal == 0) {
                    horizontal = 5
                } else {
                    horizontal--
                }
                break
            case 'right':
                if (horizontal == 5) {
                    horizontal = 0
                } else {
                    horizontal++
                }
        }

        selectionList.push(fighters[vertical][horizontal])
    }
    return selectionList
}