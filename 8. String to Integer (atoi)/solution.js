/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let min = -Math.pow(2, 31)
    let max = -min - 1
    
    function charToValue(c) {
      switch (c) {
        case '0': return 0;
        case '1': return 1;
        case '2': return 2;
        case '3': return 3;
        case '4': return 4;
        case '5': return 5;
        case '6': return 6;
        case '7': return 7;
        case '8': return 8;
        case '9': return 9;
        default: return 0;          
      }
    }
  
    let isCharDigit = c => {
      return c === '0' || c === '1' ||
             c === '2' || c === '3' ||
             c === '4' || c === '5' ||
             c === '6' || c === '7' ||
             c === '8' || c === '9'
    }
    let isSign = c => {
      return c === '+' || c === '-'
    }

    let ss = s.trimStart()    
    
    if (!isSign(ss[0]) && !isCharDigit(ss[0]))
      return 0
  
    if (isSign(ss[0]) && !isCharDigit(ss[1]))
      return 0
    
    let sign = 1
    if (isSign(ss[0])) {
      sign = ss[0] === '-' ? -1 : 1
    }
  
    let first = undefined, last = 0
    let out = 0
    for (let i = isSign(ss[0]) ? 1 : 0; i < s.length; ++i) {
      if (isCharDigit(ss[i])) {
        if (first === undefined) {
          first = i
        }
        last = i
      } else {
        break
      }
    }
  
  for (let i = last; i >= first; --i) {
    out += charToValue(ss[i]) * Math.pow(10, last - i)
  }
    
  out *= sign
  if (out < min)
    return min
  else if (out > max)
    return max
  else
    return out
};