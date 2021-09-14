/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let o = 0
    const m = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }
    for (let i = 0; i < s.length;) {
        let two = m[s[i]+s[i+1]]
        if (two) {
            o += two
            i += 2
        } else if (m[s[i]]) {
            o += m[s[i]]
            ++i
        }
    }

    return o
};