// USD to CNY
// https://www.codewars.com/kata/5977618080ef220766000022

function usdcny(usd) {
    let conversion = usd * 6.75
    return (`${conversion.toFixed(2)} Chinese Yuan`)
}