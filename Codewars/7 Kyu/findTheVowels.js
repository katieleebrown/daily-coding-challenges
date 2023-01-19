// Find the Vowels
// https://www.codewars.com/kata/5680781b6b7c2be860000036

function vowelIndices(word){
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let indices = []
    word = word.toLowerCase().split('')
    
    for(let i = 0; i < word.length; i++) {
      vowels.includes(word[i]) && indices.push(i + 1)
    }
    
    return indices
  }