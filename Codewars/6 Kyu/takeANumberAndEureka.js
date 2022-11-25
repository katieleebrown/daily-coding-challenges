// Take a Number and Sum Its Digits to The Consecutive Powers and ... Eureka!
// https://www.codewars.com/kata/5626b561280a42ecc50000d1

function sumDigPow(a, b) {
    let eurekas = []
    
    for (let i = a; i <= b; i++) {
      if (i > 0 && i < 10) {
        eurekas.push(i)
      } else {
        let nums = i.toString().split('')
        let pows = nums.map((x, inx) => Number(x)**(inx + 1))
        let sum = pows.reduce((a,b) => a + b)
        
        if(i == sum) {
          eurekas.push(i)
        }
      }
    }
    
    return eurekas
  }