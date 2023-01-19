// Cat and Mouse
// https://www.codewars.com/kata/57ee24e17b45eff6d6000164

function catMouse(x){
    let arr = x.split('')
    let cat = arr.indexOf('C')
    let mouse = arr.indexOf('m')
    
    return mouse - cat > 4 ? 'Escaped!' : 'Caught!'
  }