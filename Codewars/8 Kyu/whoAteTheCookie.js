// Who ate the cookie?
// https://www.codewars.com/kata/55a996e0e8520afab9000055

function cookie(x){
    switch(typeof x) {
        case 'string':
          return 'Who ate the last cookie? It was Zach!'
          break
        case 'number':
          return 'Who ate the last cookie? It was Monica!'
          break
        default:
          return 'Who ate the last cookie? It was the dog!'
          break
    }
  }