// Statistics for an Athletic Association
// https://www.codewars.com/kata/55b3425df71c1201a800009c/

function stat(strg) {
    let timesArr = strg.split(', ')
    let sorted = convertToSeconds(timesArr).sort((a, b) => a - b)
    let range = convertToHMS(sorted[sorted.length - 1] - sorted[0])
    let average = convertToHMS(sorted.reduce((a, b) => a + b, 0) / sorted.length)
    let median = sorted.length % 2 != 0 ? convertToHMS(sorted[(sorted.length - 1) / 2]) : convertToHMS((sorted[sorted.length / 2] + (sorted[(sorted.length / 2) - 1])) / 2)

    return strg == '' ? '' : `Range: ${range} Average: ${average} Median: ${median}`
}

function convertToSeconds(arr) {
    return arr.map(x => {
        let nums = x.split('|').map(x => Number(x))
        let hours = nums[0] * 3600
        let mins = nums[1] * 60
        let seconds = nums[2]
        return hours + mins + seconds
    })
}

function convertToHMS(x) {
    let hours = Math.floor(x / 3600)
    if (hours < 10) {
        hours = '0' + hours.toString()
    }

    x = x - (hours * 3600)

    let mins = Math.floor(x / 60)
    if (mins < 10) {
        mins = '0' + mins.toString()
    }

    let seconds = Math.floor(x - (mins * 60))
    if (seconds < 10) {
        seconds = '0' + seconds.toString()
    }

    return `${hours}|${mins}|${seconds}`
}