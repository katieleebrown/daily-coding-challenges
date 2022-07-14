// Sum of Numbers from 0 To N
// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763

var SequenceSum = (function () {
    function SequenceSum() { }

    SequenceSum.showSequence = function (count) {
        let arr = []
        let sum = 0
        for (let i = 0; i <= count; i++) {
            sum += i
            arr.push(i)
        }
        let str = arr.join('+')
        return count < 0 ? `${count}<0` : count == 0 ? '0=0' : `${str} = ${sum}`
    };

    return SequenceSum;

})();