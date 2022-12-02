// Speed Control
// https://www.codewars.com/kata/56484848ba95170a8000004d

function gps(s, x) {
    let speed = []

    for (let i = 0; i < x.length - 1; i++) {
        let distance = x[i + 1] - x[i]

        speed.push(((3600 * distance) / s))
    }

    speed = speed.sort((a, b) => a - b)
    console.log(speed)

    return x.length < 2 ? 0 : Math.floor(speed[speed.length - 1])
}