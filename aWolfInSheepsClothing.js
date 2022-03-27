// A Wolf In Sheep's Clothing
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

function warnTheSheep(queue) {
    let wolf = queue.indexOf("wolf")

    if (queue.length === wolf - 1 || (queue.length === 1 && queue[0] == 'wolf') || (queue.length - wolf - 1 === 0)) {
        return "Pls go away and stop eating my sheep"
    } else {
        return "Oi! Sheep number " + (queue.length - wolf - 1) + "! You are about to be eaten by a wolf!"
    }

}