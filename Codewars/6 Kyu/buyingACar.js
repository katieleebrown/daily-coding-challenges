// Buying A Car
// https://www.codewars.com/kata/554a44516729e4d80b000012/

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    if (startPriceOld >= startPriceNew) {
        return [0, startPriceOld - startPriceNew]
    }

    let savings = 0
    let months

    for (months = 1; (savings + startPriceOld) < startPriceNew; months++) {
        savings += savingperMonth

        if (months > 0 && (months % 2 == 0)) {
            percentLossByMonth += .5
        }

        startPriceOld = startPriceOld - (startPriceOld * (percentLossByMonth / 100))
        startPriceNew = startPriceNew - (startPriceNew * (percentLossByMonth / 100))
        console.log(months, savings, startPriceOld, startPriceNew)
    }

    return [months - 1, Math.round((savings + startPriceOld) - startPriceNew)]
}