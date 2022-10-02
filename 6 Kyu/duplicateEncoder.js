// Duplicate Encoder
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word){
    word = word.toLowerCase()
    let letterCount = [...word].reduce((a,e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {})
    console.log(letterCount)
    
    let encoder = []
    word.split('').forEach(x => {
      encoder.push(letterCount[x] == 1 ? '(' : ')')
    })
    
    return encoder.join('')
}