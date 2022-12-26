// Data Reverse
// https://www.codewars.com/kata/569d488d61b812a0f7000015/

function dataReverse(data) {
    let bytes = []

    for (let i = 0; i < data.length; i += 8) {
        let byte = data.slice(i, i + 8)

        bytes.unshift(byte)
    }

    return bytes.flat()
}