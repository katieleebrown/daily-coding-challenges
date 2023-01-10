// The Office II - Boredom Score
// https://www.codewars.com/kata/57ed4cef7b45ef8774000014/

function boredom(staff) {
    let score = 0

    for (const department in staff) {
        switch (staff[department]) {
            case 'accounts':
                score += 1
                break
            case 'finance':
                score += 2
                break
            case 'canteen':
                score += 10
                break
            case 'regulation':
                score += 3
                break
            case 'trading':
            case 'change':
                score += 6
                break
            case 'IS':
                score += 8
                break
            case 'retail':
                score += 5
                break
            case 'cleaning':
                score += 4
                break
            case 'pissing about':
                score += 25
                break
        }
    }

    return score < 80 ? 'kill me now' : score < 100 ? 'i can handle this' : 'party time!!'
}