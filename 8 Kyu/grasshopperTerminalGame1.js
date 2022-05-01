// Grasshopper - Terminal Game 1
// https://www.codewars.com/kata/55e8aba23d399a59500000ce

function Hero(name) {
    let Hero = {}
    name ? Hero.name = name : Hero.name = 'Hero'
    Hero.position = '00'
    Hero.health = 100
    Hero.damage = 5
    Hero.experience = 0

    return Hero
}