// I love you, a little, a lot, passionately... not at all
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

function howMuchILoveYou(nbPetals) {
    switch (nbPetals % 6) {
        case 1:
            return 'I love you'
            break
        case 2:
            return 'a little'
            break
        case 3:
            return 'a lot'
            break
        case 4:
            return 'passionately'
            break
        case 5:
            return 'madly'
            break
        case 0:
            return 'not at all'
            break
    }
}
