// Simple Remove Duplicates
// https://www.codewars.com/kata/5ba38ba180824a86850000f7/

function solve(arr) {
    let newArr = []
    
    for(let i = arr.length - 1; i >= 0; i--) {
      if(!newArr.includes(arr[i])){
        newArr.unshift(arr[i])
      }  
    }
    
    return newArr
  }