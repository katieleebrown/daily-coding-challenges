// DNA to RNA Conversion
// 

function DNAtoRNA(dna) {
    let arr = dna.split('')
    arr = arr.map(x => x == 'T' ? 'U' : x)
    return arr.join('')
  }