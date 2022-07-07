// Complementary DNA
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

function DNAStrand(dna) {
    let letters = dna.split('')
    for (let i = 0; i < letters.length; i++) {
        switch (letters[i]) {
            case 'A':
                letters[i] = 'T'
                break
            case 'T':
                letters[i] = 'A'
                break
            case 'G':
                letters[i] = 'C'
                break
            case 'C':
                letters[i] = 'G'
                break
        }
    }

    return letters.join('')
}