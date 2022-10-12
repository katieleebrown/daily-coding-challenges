// Highest Number in an Array
// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

function highestRank(arr){
    const counts = {}
    let maxNum = arr[0]
    let maxCount = 1
    
    for (const num of arr) {
      counts[num] = counts[num] ? counts[num] + 1 : 1
      if(counts[num] > maxCount) {
        maxCount = counts[num]
        maxNum = num
      }
    }
    
    return maxNum
  }