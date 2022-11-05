// Max Diff - Easy
// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095

function maxDiff(list) {
    list.sort((a, b) => a - b)

    return list.length > 0 ? Math.abs(list[0] - list[list.length - 1]) : 0
};