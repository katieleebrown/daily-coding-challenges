// Grasshopper - Terminal Game Turn Function
// https://www.codewars.com/kata/56019d3b2c39ccde76000086

function doTurn(n) {
    rollDice(n)
    move(n)
    combat(n)
    getCoins(n)
    buyHealth(n)
    printStatus(n)
}