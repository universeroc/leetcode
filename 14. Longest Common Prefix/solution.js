/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let common = ''
    let i = 0
    let t = strs[0][i]
    while (i < strs[0].length) {
        let eq = true
        for (let r = 0; r < strs.length; ++r) {
            if (strs[r][i] !== t) {
                eq = false
                break
            }
        }
        if (eq) {
            if (strs[0].length === 1) {
                return strs[0][0]
            }
            ++i
            common = strs[0].substring(0, i)
            t = strs[0][i]
        } else {
            return common
        }
    }
    return common
};