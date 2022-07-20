// Title Case
// https://www.codewars.com/kata/5202ef17a402dd033c000009

function titleCase(title, minorWords) {
    if (minorWords) {
        minorWords = minorWords.toLowerCase().split(' ')
    } else if (title == '') {
        return ''
    }
    title = title.toLowerCase().split(' ')

    let titleCased = []

    for (let i = 0; i < title.length; i++) {
        let word = title[i].split('')

        if ((i == 0 && title != '') || !minorWords || !minorWords.includes(title[i])) {
            word[0] = word[0].toUpperCase()
        }
        titleCased.push(word.join(''))
    }

    return titleCased.join(' ')
}