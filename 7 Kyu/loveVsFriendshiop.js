// Love vs Friendship
// https://www.codewars.com/kata/59706036f6e5d1e22d000016

function wordsToMarks(string){
    string = string.split('').map(x => x.charCodeAt() - 96)
    
    return string.reduce((a,b) => a + b, 0)
  }