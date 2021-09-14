/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1)
        return s.length
    
    let max = 1
    let p = 0, q = 1
    let dict = {}
    dict[s[p]] = true
    for (; p < s.length && q < s.length;) {
        let t = dict[s[q]]
        if (!t) {
            dict[s[q]] = true
            ++q
            if (q - p > max) {
                max = q - p
            }
        } else {
            ++p
            dict = {}
            dict[s[p]] = true
            q = p + 1
        }
    }

    return max
};