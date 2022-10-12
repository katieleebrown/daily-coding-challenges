// Alphabet War
// https://www.codewars.com/kata/59377c53e66267c8f6000027

function alphabetWar(fight) {
    let total = 0
    let letters = fight.split('')

    letters.forEach(x => {
        switch (x) {
            case 'w':
                total += 4
                break
            case 'p':
                total += 3
                break
            case 'b':
                total += 2
                break
            case 's':
                total += 1
                break
            case 'm':
                total -= 4
                break
            case 'q':
                total -= 3
                break
            case 'd':
                total -= 2
                break
            case 'z':
                total -= 1
        }
    })

    return total == 0 ? "Let's fight again!" : total > 0 ? "Left side wins!" : "Right side wins!"
}