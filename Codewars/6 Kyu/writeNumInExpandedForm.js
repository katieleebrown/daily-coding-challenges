// Write Number in Expanded Form
// https://www.codewars.com/kata/5842df8ccbd22792a4000245/

function expandedForm(num) {
    let numbers = num.toString().split('')
    let newNums = []
    numbers.forEach((item, index) => {
      let zeroes = (numbers.length - index - 1)
      
      for(let i = 1; i <= zeroes; i++) {
        item = item + '0'
      }
      
      if (parseInt(item) !== 0) {
        newNums.push(item)
      }
    } )
    return newNums.join(' + ')
  }