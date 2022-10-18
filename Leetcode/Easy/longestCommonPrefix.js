// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function (strs) {
    let prefix = []

    for (let i = 0; i < strs[0].length; i++) {
        let chars = []

        strs.forEach(word => {
            chars.push(word.charAt(i))
        })
        console.log(chars)

        let uniqueChars = [... new Set(chars)]
        console.log(uniqueChars)

        if (uniqueChars.length == 1) {
            prefix.push(uniqueChars[0])
        } else {
            return prefix.join('')
        }
    }
};