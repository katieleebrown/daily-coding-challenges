// Two Fighters, One Winner
// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b

function declareWinner(fighter1, fighter2, firstAttacker) {
    let fighterOne = Math.ceil(fighter1.health / fighter2.damagePerAttack)
    let fighterTwo = Math.ceil(fighter2.health / fighter1.damagePerAttack)

    return fighterOne < fighterTwo ? fighter2.name : fighterTwo < fighterOne ? fighter1.name : firstAttacker
}