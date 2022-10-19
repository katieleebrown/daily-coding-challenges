// Are they the "same"?
// https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(array1, array2){
    if(array1 == null || array2 == null) return false
    
    array1 = array1.map(x => x * x).sort((a, b) => a - b)
    array2 = array2.sort((a,b) => a -b)
  
    array1 = array1.map((x,i) => array2[i] == x ? true : false)
    
    return !array1.includes(false)
  }