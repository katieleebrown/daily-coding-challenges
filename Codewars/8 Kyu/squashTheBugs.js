// Squash the Bugs
// https://www.codewars.com/kata/56f173a35b91399a05000cb7

function findLongest(str) {  
    let spl = str.split(" ");
    let longest = 0
    
    for (let i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length
      }
      }
      return longest
  }