/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = []
    let table = {
        '(':')',
        '[':']',
        '{':'}'
    }
    
    for (let c of s) {
        if (c === '(' ||
            c === '{' ||
            c === '[') {
            stack.push(c)
        } else if (stack.length > 0) {
            let left = stack[stack.length - 1]
            if (table[left] === c) {
                stack.pop()
            } else {
                return false
            }
        } else {
            return false
        }
    }
    return stack.length === 0
};