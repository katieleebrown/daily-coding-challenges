// Bouncing Balls
// https://www.codewars.com/kata/5544c7a5cb454edb3c000047

function bouncingBall(h, bounce, window) {
    if (bounce >= 1 || bounce <= 0 || h <= window) {
        return -1
    }

    let motherCount = 0
    let height = h

    while (height > window) {
        height *= bounce
        motherCount += 2
    }
    return motherCount - 1
}