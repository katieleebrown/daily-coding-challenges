// Simple Interest & Compound Interest
// https://www.codewars.com/kata/59cd0535328801336e000649

function interest(P,r,n) {
    let simple = Math.round(P + (P * r * n))
    let compound = P
    
    for(let i = 1; i <= n; i++) {
      compound+= (compound * r)
    }
   return [simple, Math.round(compound)]
 }