// The Vowel Code
// https://www.codewars.com/kata/53697be005f803751e0015aa

function encode(string) {
    let arr = string.split('')

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'a':
                arr[i] = '1'
                break
            case 'e':
                arr[i] = '2'
                break
            case 'i':
                arr[i] = '3'
                break
            case 'o':
                arr[i] = '4'
                break
            case 'u':
                arr[i] = '5'
                break
        }
    }

    return arr.join('')
}

function decode(string) {
    let arr = string.split('')

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '1':
                arr[i] = 'a'
                break
            case '2':
                arr[i] = 'e'
                break
            case '3':
                arr[i] = 'i'
                break
            case '4':
                arr[i] = 'o'
                break
            case '5':
                arr[i] = 'u'
                break
        }
    }

    return arr.join('')
}