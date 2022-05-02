// Define A Card Suit
// https://www.codewars.com/kata/5a360620f28b82a711000047

function defineSuit(card) {
    let newArr = card.split('')
    let suit = newArr[newArr.length - 1]
    switch (suit) {
        case '♣':
            return 'clubs'
            break
        case '♦':
            return 'diamonds'
            break
        case '♥':
            return 'hearts'
            break
        case '♠':
            return 'spades'
            break
    }
}