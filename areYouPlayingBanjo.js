// Are You Playing Banjo ?
// https ://www.codewars.com/kata/53af2b8861023f1d88000832

function areYouPlayingBanjo(name) {
    if (name.startsWith('r') || name.startsWith('R')) {
        return (`${name} plays banjo`)
    } else {
        return (`${name} does not play banjo`)
    }
}