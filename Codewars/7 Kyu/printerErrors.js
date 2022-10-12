// Printer Errors
// https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {
    let colors = s.split('')
    let num = colors.length
    let errs = 0

    for (let i = 0; i < colors.length; i++) {
        let errors = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        if (errors.includes(colors[i])) {
            errs++
        }
    }
    return `${errs}/${num}`
}