// Number of People in the Bus
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

var number = function(busStops){
    let passengers = 0
    busStops.forEach(x => {
      passengers += x[0]
      passengers -= x[1]
    })
    return passengers
  }