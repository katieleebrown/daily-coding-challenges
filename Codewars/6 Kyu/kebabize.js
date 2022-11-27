// Kebabize
// https://www.codewars.com/kata/57f8ff867a28db569e000c4a/

function kebabize(str) {
    let words = str.split(/(?=[A-Z])/)
    words = words.map(word => word.toLowerCase().replace(/[0-9]/g, '')).filter(word => word.length > 0)
    return words.join('-')
  }