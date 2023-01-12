// Meeting
// https://www.codewars.com/kata/59df2f8f08c6cec835000012

function meeting(s) {
    let guests = s.split(';').map(x => {
      let name = x.split(':')
      return {firstName: name[0].toUpperCase(), lastName: name[1].toUpperCase()}
    }).sort(sortOnLastThenFirst)
    
    console.log(guests)
  
  let sorted = guests.map(x => {
    return `(${x.lastName}, ${x.firstName})`
  })
  
  return sorted.join('')
}

function sortOnLastThenFirst(a,b) {
  if(a.lastName > b.lastName) {
    return 1
  } else if (a.lastName < b.lastName) {
    return -1
  } else if (a.lastName.charAt(1) > b.lastName.charAt(1)) {
    return 1
  } else if (a.lastName.charAt(1) > b.lastName.charAt(1)) {
    return -1
  } else if (a.firstName > b.firstName) {
    return 1
  } else if (a.firstName < b.firstName) {
    return -1
  }
}