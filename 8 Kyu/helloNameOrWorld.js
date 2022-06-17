// Hello, Name or World!
// https://www.codewars.com/kata/57e3f79c9cb119374600046b

function hello(name) {
    if (name == '' || name == undefined) {
      return 'Hello, World!'
    } else {
      name = name.toLowerCase().split('')
      name[0] = name[0].toUpperCase()
      name = name.join('')
      
      return `Hello, ${name}!`
    }
  }