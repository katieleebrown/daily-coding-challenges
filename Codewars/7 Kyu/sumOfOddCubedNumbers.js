// Sum of Odd Cubed Numbers
// https://www.codewars.com/kata/580dda86c40fa6c45f00028a

function cubeOdd(arr) {
    let types = arr.map(x => typeof x)
    if (types.includes(undefined) || types.includes('string')) return undefined
  
    let cubes = arr.filter(x => x % 2 != 0).map(x =>  x**3)
    console.log(cubes)
  
    return cubes.reduce((a,b) => a + b, 0)
  }