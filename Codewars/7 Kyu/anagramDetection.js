// Anagram Detection
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255

// write the function isAnagram
var isAnagram = function(test, original) {
    test = test.toLowerCase().split('').sort().join('')
    original = original.toLowerCase().split('').sort().join('')
    
    return test == original
  };