// Friend or Foe? 
// https://www.codewars.com/kata/55b42574ff091733d900002f

function friend(friends) {
    let onlyFriends = []

    friends.forEach(name => {
        if (name.length === 4) {
            onlyFriends.push(name)
        }
    })

    return onlyFriends
}