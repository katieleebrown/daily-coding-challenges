// Find Out Whether the Shape is A Cube
// https://www.codewars.com/kata/58d248c7012397a81800005c

var cubeChecker = function (volume, side) {
    return side * side * side === volume && volume > 0
};