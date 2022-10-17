// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function (x) {
    if (x < 0) return false

    let len = Math.ceil(Math.log10(x + 1))

    for (let i = 0; i < len / 2; i++) {
        let last = Math.floor(x / (10 ** (i))) % 10
        let first = Math.floor(x / (10 ** (len - i - 1))) % 10

        if (last != first) return false
    }

    return true
};