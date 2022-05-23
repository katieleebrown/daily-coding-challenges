// Bingo (or Not)
// https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145

function bingo(a) {
    return (a.includes(2) && a.includes(9) && a.includes(14) && a.includes(7) && a.includes(15)) ? 'WIN' : 'LOSE'
  }