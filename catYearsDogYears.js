// Cat Years, Dog Years
// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0
    let dogYears = 0
    if (humanYears > 2) {
      catYears += ((humanYears - 2) * 4) + 15 + 9
      dogYears += ((humanYears - 2) * 5) + 15 + 9
    } else if (humanYears > 1) {
      catYears += 15 + 9
      dogYears += 15 + 9
    } else if (humanYears = 1) {
      catYears = 15
      dogYears = 15
    }
    return [humanYears, catYears, dogYears]
  }