// ASCII Total
// https://www.codewars.com/kata/572b6b2772a38bc1e700007a

function uniTotal (string) {
    return string.split('').reduce((a,b) => a + b.charCodeAt(0), 0)
  }