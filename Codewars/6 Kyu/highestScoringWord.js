// Highest Scoring Word
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x){
    let words = x.split(' ')
    let alphabet = [ ,'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'
  , 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let points = []
    
    words.forEach(word => {
      points.push(word.split('').map(x => alphabet.indexOf(x)).reduce((a,b) => a + b, 0))
    })
  
    let highestPointsIndex = 0
    for (let i = 0; i < points.length; i++) {
      if (points[i] > points[highestPointsIndex]) {
        highestPointsIndex = i
      }
    }
    return words[highestPointsIndex]
  }