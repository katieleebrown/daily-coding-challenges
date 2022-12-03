// Name on Billboard
// 

function billboard(name, price = 30) {
    let cost = 0

    for (let i = 0; i < name.length; i++) {
        cost += price
    }

    return cost
}

// This kata requires no use of the '*' symbol. Here's a quick one line solution using '*':
function billboardWithAsterisk(name, price) {
    return price ? name.length * price : name.length * 30
}