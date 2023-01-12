// Calculate Price Excluding VAT
// https://www.codewars.com/kata/5890d8bc9f0f422cf200006b/

function excludingVatPrice(price) {
    console.log(price)
    let startCost = (price / 1.15).toFixed(2)

    return typeof price != 'number' ? -1 : Number(startCost)
}