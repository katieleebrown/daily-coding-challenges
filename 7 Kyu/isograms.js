// Isograms
// https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str){
    let arr = str.split('')
    let letters = []
    
    for (let i = 0; i < arr.length; i++) {
      if (letters.includes(arr[i].toLowerCase())) {
        return false
      } else {
        letters.push(arr[i].toLowerCase())
      }
    }
    return true
  }