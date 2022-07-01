// The Supermarket Queue
// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(customers, n) {
    let queue = []
  
    if (customers.length == 0) {
      return 0
    } else if (n == 1) {
      return customers.reduce((a, b) => a + b, 0)
    } else {
      for (let i = 0; i < customers.length; i++) {
      if (queue.length < n) {
        queue.push(customers[i])
      } else if (queue.length = n) {
        let min = Math.min(...queue)
        let index = queue.indexOf(min)
        queue[index] += customers[i]
      }
    }
    
    return Math.max(...queue)
    }
    
    
  }