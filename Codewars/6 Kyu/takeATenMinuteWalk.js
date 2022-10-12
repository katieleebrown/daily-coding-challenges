// Take a Ten Minute Walk
// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
    let east = 0
    let west = 0
    let north = 0
    let south = 0
    
    for(let i = 0; i < walk.length; i++) {
      switch(walk[i]) {
          case 'n':
            north++
            break
          case 'e':
            east++
            break
          case 's':
            south++
            break
          case 'w':
            west++
            break
      }
    }
    
    if (walk.length !== 10 || east !== west || north !== south) {
      return false
    } else {
      return true
    }
  }