// Over the Road
// https://www.codewars.com/kata/5f0ed36164f2bc00283aed07

function overTheRoad(address, n){
    let houses = n * 2
    let position = (address + 1) / 2
    
    return houses - ((position * 2) - 2)
  }