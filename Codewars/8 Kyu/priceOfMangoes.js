// Price of Mangoes
// https://www.codewars.com/kata/57a77726bb9944d000000b06

function mango(quantity, price) {
    let freeMangoes = Math.floor(quantity / 3)
    return (quantity - freeMangoes) * price
}