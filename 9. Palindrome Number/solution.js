/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x < 0)
        return false
    
    let m = []
    while (x) {
        m.push(x % 10)
        x = Math.floor(x / 10)
    }
    for (let i = 0, j = m.length - 1; i < j; ++i, --j) {
        if (m[i] !== m[j])
            return false
    }
    return true
};