// Small Enough? Beginner
// https://www.codewars.com/kata/57cc981a58da9e302a000214

function smallEnough(a, limit){
    a = a.map(x => x <= limit ? true : false)
    
    return a.includes(false) ? false : true
  }