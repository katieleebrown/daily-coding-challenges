// Logic Drills - Traffic Light
// https://www.codewars.com/kata/58649884a1659ed6cb000072

function updateLight(current) {
    let next
    switch (current) {
        case 'green':
            next = 'yellow'
            break
        case 'yellow':
            next = 'red'
            break
        case 'red':
            next = 'green'
            break
    }
    return next
}