// Bumps in the Road
// https://www.codewars.com/kata/57ed30dde7728215300005fa

function bump(x) {
    let bumps = x.split('').filter(x => x == 'n')
    return bumps.length > 15 ? 'Car Dead' : 'Woohoo!'
}