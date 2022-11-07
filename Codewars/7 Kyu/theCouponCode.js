// The Coupon Code
// https://www.codewars.com/kata/539de388a540db7fec000642

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode !== correctCode) {
      return false
    } else if (currentDate == expirationDate) {
      return true
    } 
    let current = reduceDate(currentDate)
    let expiration = reduceDate(expirationDate)
    console.log(current, expiration)
    
    if(current[2] > expiration[2]) {
      return false   
    } else if (current[0] > expiration[0]) {
      return false
    } else if (current[0] == expiration[0] && current[1] > expiration[1] && current[2] >= expiration[2]) {
      return false
    } else {
      return true
    }
  }
  
  function reduceDate(date) {
    date = date.split(' ')
    let day = date[1].slice(0, (date[1].length -1))
    let month
    
    switch (date[0]) {
        case 'January':
          month = 1
          break
        case 'February':
          month = 2
          break
      case 'March':
          month = 3
          break
      case 'April':
          month = 4
          break
      case 'May':
          month = 5
          break
      case 'June':
          month = 6
          break
      case 'July':
          month = 7
          break
      case 'August':
          month = 8
          break
      case 'September':
          month = 9
          break
      case 'October':
          month = 10
          break
      case 'November':
          month = 11
          break
      case 'December':
          month = 12
          break
    }
    
    return [month, Number(day), Number(date[2])]
  }