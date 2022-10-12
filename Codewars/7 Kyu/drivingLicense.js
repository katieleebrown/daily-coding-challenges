// Driving License
// https://www.codewars.com/kata/586a1af1c66d18ad81000134

function driver(data) {
    let number = []

    // 1 -5 :Add last name
    let surname = data[2].toUpperCase()
    surname = surname.split('')
    if (surname.length < 5) {
        surname.forEach(letter => {
            number.push(letter)
        })
        while (number.length < 5) {
            number.push(9)
        }
    } else if (surname.length >= 5) {
        for (let i = 0; i < 5; i++) {
            number.push(surname[i])
        }
    }

    // 6: decade digit 
    let birthday = data[3].split('-')
    let birthYear = birthday[2]
    number.push(birthYear.charAt(2))


    //7 - 8: birth month
    let month = birthday[1].toLowerCase()
    month = month.substring(0, 3)
    switch (month) {
        case 'jan':
            data[4] == 'M' ? number.push('01') : number.push('51')
            break
        case 'feb':
            data[4] == 'M' ? number.push('02') : number.push('52')
            break
        case 'mar':
            data[4] == 'M' ? number.push('03') : number.push('53')
            break
        case 'apr':
            data[4] == 'M' ? number.push('04') : number.push(54)
            break
        case 'may':
            data[4] == 'M' ? number.push('05') : number.push(55)
            break
        case 'jun':
            data[4] == 'M' ? number.push('06') : number.push(56)
            break
        case 'jul':
            data[4] == 'M' ? number.push('07') : number.push(57)
            break
        case 'aug':
            data[4] == 'M' ? number.push('08') : number.push(58)
            break
        case 'sep':
            data[4] == 'M' ? number.push('09') : number.push(59)
            break
        case 'oct':
            data[4] == 'M' ? number.push('10') : number.push(60)
            break
        case 'nov':
            data[4] == 'M' ? number.push('11') : number.push(61)
            break
        case 'dec':
            data[4] == 'M' ? number.push('12') : number.push(62)
            break
    }

    // 9 - 10: day date of month of birth
    number.push(birthday[0])

    // 11: year digit from yob
    number.push(birthday[2].charAt(3))

    // 12 - 13: First and Middle Initial
    number.push(data[0].charAt(0))
    data[1].length > 0 ? number.push(data[1].charAt(0)) : number.push(9)


    // 14: Arbitrary Digit (9)
    number.push(9)

    //15 -16: Computer Digits
    number.push('AA')

    return number.join('')
}