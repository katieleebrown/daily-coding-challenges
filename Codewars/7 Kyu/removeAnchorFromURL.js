// Remove the Anchor from the URL
// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

function removeUrlAnchor(url){
    if (url.includes('#')) {
      let arr = url.split('#')
      return arr[0]
    } else {
      return url
    }
  }