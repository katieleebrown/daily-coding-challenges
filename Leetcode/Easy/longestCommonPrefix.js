// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function (strs) {
    let prefix = []

    if (strs.length == 1 || strs[0].length == 0) {
        return strs[0]
    }

    for (let i = 0; i < strs[0].length; i++) {
        let chars = []

        strs.forEach(word => {
            chars.push(word.charAt(i))
        })

        let uniqueChars = [... new Set(chars)]

        if (uniqueChars.length == 1) {
            prefix.push(uniqueChars[0])
        } else {
            return prefix.join('')
        }
    }

    return prefix.join('')
};