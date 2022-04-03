// Is There a Vowel in There?
// 

function isVow(a) {
    return a.map(element => {
        if (element === 97) {
            return 'a'
        } else if (element === 101) {
            return 'e'
        } else if (element === 105) {
            return 'i'
        } else if (element === 111) {
            return 'o'
        } else if (element === 117) {
            return 'u'
        } else {
            return element
        }
    })
}