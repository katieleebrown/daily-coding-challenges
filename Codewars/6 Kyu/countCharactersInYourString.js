// Count Characters In Your String
// https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count (string) {  
    string = string.toLowerCase()
    return [...string].reduce((a,e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {})
}