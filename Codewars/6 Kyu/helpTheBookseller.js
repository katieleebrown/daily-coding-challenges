// Help the Bookseller
// https://www.codewars.com/kata/54dc6f5a224c26032800005c

function stockList(listOfArt, listOfCat){
    let results = []
    for (let i = 0; i < listOfCat.length; i++) {
      let books = listOfArt.filter(item => item.charAt(0) == listOfCat[i]).map(x => {
        let spaceIndex = x.indexOf(' ')
        return Number(x.slice(spaceIndex))
      })
  
      results.push(`(${listOfCat[i]} : ${books.reduce((a,b) => a + b, 0)})`)
    }
    console.log(listOfArt, listOfCat, results)
    
    return listOfArt.length == 0 ? '' : results.join(' - ')
  }